<?php

namespace App\Services\Register;

use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

use App\AppConst;

use App\Services\Register\RegisterServiceInterface;
use App\Repositories\User\UserEloquentRepository;
use App\Repositories\UID\UIDEloquentRepository;



class RegisterService implements RegisterServiceInterface
{
    protected $userRepository;

    public function __construct(UserEloquentRepository $userRepository, UIDEloquentRepository $uidRepository)
    {
        $this->userRepository = $userRepository;
        $this->uidRepository = $uidRepository;
    }

    public function register($params = [])
    {
        $uid = Arr::get($params, 'uid');
        $name = Arr::get($params, 'name');
        $email = Arr::get($params, 'email');
        $password = Arr::get($params, 'password');

        try {
            $uidId = $this->uidRepository->findByCode($uid)->id;

            $user = $this->userRepository->create([
                'name' => $name,
                'email' => $email,
                'password' => Hash::make($password),
                'uid_id' => $uidId,
            ]);

            $this->uidRepository->update($uidId, [
                'status' => AppConst::STATUS_ACTIVE,
            ]);
            return $user;
        } catch (\Exception $ex) {
            Log::debug($ex->getMessage());
        }

        return [];
    }
}
