<?php

namespace App\Services\Auth;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use Exception;

use App\Http\Requests\API\LoginRequest;
use App\Http\Requests\API\ChangePasswordRequest;

use App\Services\Auth\AuthServiceInterface;
use App\Repositories\User\UserEloquentRepository;

class AuthService implements AuthServiceInterface
{
    protected $userRepository;

    public function __construct(UserEloquentRepository $userRepository)
    {
        $this->userRepository  = $userRepository;
    }

    public function login(LoginRequest $request)
    {
        $email = Arr::get($request->all(), 'email');
        $password = Arr::get($request->all(), 'password');

        $attempt = [
            'email' => $email,
            'password' => $password,
        ];

        if (Auth::attempt($attempt)) {
            $user = $this->userRepository->firstByEmail($email);
            if ($user) {
                Auth::login($user);
                $token = $user->createToken('APP');
                return [
                    'user' => $user,
                    'token' => $token->plainTextToken,
                ];
            }
        }

        return false;
    }

    public function logout(Request $request)
    {
        try {
            Auth::guard('web')->logout();
            // $request->user()->currentAccessToken()->delete();
            if ($request->user()) {
                $request->user()->tokens()->where('id', $request->user()->id)->delete();
            }
        } catch (Exception $ex) {
            Log::error($ex->getMessage());
        }
    }

    public function changePassword(ChangePasswordRequest $request)
    {
        $user = $request->user();
        if ($user) {
            if (Hash::check($request->input('current_password'), $user->password)) {
                $user->forceFill([
                    'password' => Hash::make($request->input('new_password')),
                ])->save();
                return true;
            }
        }
        return false;
    }
}
