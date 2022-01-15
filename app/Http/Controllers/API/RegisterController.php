<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\AppConst;
use App\Http\Controllers\API\BaseController;
use App\Http\Requests\API\RegisterRequest;

use App\Services\Register\RegisterService;

class RegisterController extends BaseController
{
    protected $registerService;

    public function __construct(RegisterService $registerService)
    {
        $this->registerService = $registerService;
    }

    public function register(RegisterRequest $request)
    {
        $result = $this->registerService->register($request);
        return $this->apiResponse(false, Response::HTTP_OK, AppConst::MESSAGE_SUCCESS, $result);
    }
}
