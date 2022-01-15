<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\RegisterController;
use App\Http\Controllers\API\UserController;
// use App\Http\Controllers\API\FileController;
use App\Http\Controllers\API\AboutController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::name('api.')->group(function () {
    Route::prefix('/auth')->name('auth.')->group(function () {
        Route::post('/login', [AuthController::class, 'login'])->name('login');
        Route::middleware('auth:sanctum')->group(function () {
            Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
            Route::post('/change-password', [AuthController::class, 'changePassword'])->name('changePassword');
        });
    });

    Route::post('/register', [RegisterController::class, 'register'])->name('register');

    Route::prefix('/profile')->name('profile.')->group(function () {
        Route::middleware('auth:sanctum')->group(function () {
            Route::get('/me', [UserController::class, 'me'])->name('me');
            Route::put('/me', [UserController::class, 'update'])->name('update');
            Route::post('/avatar', [UserController::class, 'uploadAvatar'])->name('uploadAvatar');
            Route::post('/background', [UserController::class, 'uploadBackground'])->name('uploadBackground');
        });
        Route::get('/{uid}', [UserController::class, 'show'])->name('show');
    });

    Route::prefix('/about')->name('about.')->middleware('auth:sanctum')->group(function () {
        Route::get('/', [AboutController::class, 'index'])->name('index');
        Route::post('/social-link', [AboutController::class, 'store'])->name('store');
        Route::post('/update-list/', [AboutController::class, 'updateList'])->name('updateList');
        Route::put('/social-link/{id}', [AboutController::class, 'update'])->name('update');
        Route::delete('/social-link/{id}', [AboutController::class, 'destroy'])->name('destroy');
    });
});
