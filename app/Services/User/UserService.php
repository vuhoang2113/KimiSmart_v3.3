<?php

namespace App\Services\User;

use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;

use App\Http\Requests\API\RegisterRequest;
use App\Http\Requests\API\UpdateUserRequest;
use App\Http\Requests\API\AvatarRequest;
use App\Http\Requests\API\BackgroundRequest;

use App\Services\File\Avatar\AvatarService;
use App\Services\File\Background\BackgroundService;
use App\Services\User\UserServiceInterface;

use App\Repositories\User\UserEloquentRepository;
use App\Repositories\SocialNetwork\SocialNetworkEloquentRepository;
use App\Repositories\UID\UIDEloquentRepository;

use App\Http\Resources\UserResource;
use App\Http\Resources\UserCollection;


class UserService implements UserServiceInterface
{
    protected $userRepository;
    protected $avatarService;
    protected $backgroundService;
    protected $socialNetworkRepository;
    protected $uidRepository;

    public function __construct(
        UserEloquentRepository $userRepository,
        AvatarService $avatarService,
        BackgroundService $backgroundService,
        SocialNetworkEloquentRepository $socialNetworkRepository,
        UIDEloquentRepository $uidRepository
    ) {
        $this->userRepository = $userRepository;
        $this->avatarService = $avatarService;
        $this->backgroundService = $backgroundService;
        $this->socialNetworkRepository = $socialNetworkRepository;
        $this->uidRepository = $uidRepository;
    }

    public function index()
    {
        $user = $this->userRepository->getAll();
        return $user;
    }

    public function store(RegisterRequest $request)
    {
        $uid = $request->input('uid');
        $uidId = $this->uidRepository->findByCode($uid)->id;
        $user = $this->userRepository->create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'uid_id' => $uidId,
        ]);

        return $user;
    }

    public function show($uid)
    {
        $user = $this->userRepository->firstByUID($uid);
        return $user;
    }

    public function update(UpdateUserRequest $request)
    {
        Validator::make((array)$request, [
            'email' => [
                Rule::unique('users')->ignore($request->user()->id),
            ],
        ]);

        $result = $this->userRepository->update($request->user()->id, [
            'name' => $request->name,
            'introduction' => $request->introduction != null ? $request->introduction : "",
            'email' => $request->email,
            'phone_number' => $request->phone_number != null ? $request->phone_number : "",
        ]);
        return $result;
    }

    public function uploadAvatar(AvatarRequest $request)
    {
        $url = $this->avatarService->store($request);
        $user = $this->userRepository->update($request->user()->id, [
            'avatar_url' => $url,
        ]);
        return $user;
    }

    public function uploadBackground(BackgroundRequest $request)
    {
        $url = $this->backgroundService->store($request);
        $user = $this->userRepository->update($request->user()->id, [
            'background_url' => $url,
        ]);
        return $user;
    }

    public function me(Request $request)
    {
        $id =  $request->user()->id;
        $user = $this->userRepository->firstById($id);
        return $user;
    }
}
