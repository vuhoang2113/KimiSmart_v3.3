<?php

namespace App\Services\User;

use Illuminate\Http\Request;
use App\Http\Requests\API\RegisterRequest;
use App\Http\Requests\API\UpdateUserRequest;
use App\Http\Requests\API\AvatarRequest;
use App\Http\Requests\API\BackgroundRequest;

interface UserServiceInterface
{

    public function index();
    public function store(RegisterRequest $request);
    public function show($uid);
    public function update(UpdateUserRequest $request);
    public function uploadAvatar(AvatarRequest $request);
    public function uploadBackground(BackgroundRequest $request);
    public function me(Request $request);
}
