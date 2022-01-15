<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Response;
use App\Http\Requests\API\UpdateUserRequest;
use App\Http\Requests\API\AvatarRequest;
use App\Http\Requests\API\BackgroundRequest;

use App\Services\User\UserService;
use App\Helpers\APIHelper;
use App\AppConst;


class UserController extends BaseController
{
    protected $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    public function index()
    {
        $user = $this->userService->index();
        return $this->apiResponse(false, Response::HTTP_OK, AppConst::MESSAGE_SUCCESS, $user);
    }

    public function store(Request $request)
    {
        $user = $this->userService->store($request);
        return $this->apiResponse(false, Response::HTTP_OK, AppConst::MESSAGE_SUCCESS, $user);
    }

    public function show($uid)
    {
        $user = $this->userService->show($uid);
        return $this->apiResponse(false, Response::HTTP_OK, AppConst::MESSAGE_SUCCESS, $user);
    }

    public function update(UpdateUserRequest $request)
    {
        $user = $this->userService->update($request);
        return $this->apiResponse(false, Response::HTTP_OK, AppConst::MESSAGE_SUCCESS, $user);
    }

    public function uploadAvatar(AvatarRequest $request)
    {
        $user = $this->userService->uploadAvatar($request);
        return $this->apiResponse(false, Response::HTTP_OK, AppConst::MESSAGE_SUCCESS, [
            'url' => $user->profile_photo_url,
        ]);
    }

    public function uploadBackground(BackgroundRequest $request)
    {
        $user = $this->userService->uploadBackground($request);
        return $this->apiResponse(false, Response::HTTP_OK, AppConst::MESSAGE_SUCCESS, [
            'url' => $user->profile_photo_url,
        ]);
    }

    public function me(Request $request)
    {
        $user = $this->userService->me($request);
        return $this->apiResponse(false, Response::HTTP_OK, AppConst::MESSAGE_SUCCESS, $user);
    }
}
