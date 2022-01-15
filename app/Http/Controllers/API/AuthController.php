<?php

namespace App\Http\Controllers\API;

use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\AppConst;

use App\Http\Controllers\API\BaseController;

use App\Http\Requests\API\LoginRequest;
use App\Http\Requests\API\ChangePasswordRequest;

use App\Services\Auth\AuthService;

class AuthController extends BaseController
{
    protected $authService;

    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }

    public function login(LoginRequest $request)
    {
        $result = $this->authService->login($request);
        if ($result) {
            return $this->apiResponse(false, Response::HTTP_OK, AppConst::MESSAGE_SUCCESS, [
                'user' => $result['user'],
                'token' => $result['token'],
            ]);
        } else {
            return $this->apiResponse(true, Response::HTTP_UNAUTHORIZED, 'Wrong login information', []);
        }
    }

    public function logout(Request $request)
    {
        $this->authService->logout($request);
        return $this->apiResponse(false, Response::HTTP_OK, AppConst::MESSAGE_SUCCESS, [
            'id' => $request->user()->id,
        ]);
    }

    public function changePassword(ChangePasswordRequest $request)
    {
        $result = $this->authService->changePassword($request);
        if ($result === true) {
            return $this->apiResponse(false, Response::HTTP_OK, AppConst::MESSAGE_SUCCESS, [
                'result' => $result,
            ]);
        } else {
            return $this->apiResponse(true, Response::HTTP_OK, AppConst::MESSAGE_FAILED, [
                'result' => $result,
            ]);
        }
    }
}
