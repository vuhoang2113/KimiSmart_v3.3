<?php

namespace App\Services\File\Background;

use App\Http\Requests\API\BackgroundRequest;

interface BackgroundServiceInterface
{
    public function store(BackgroundRequest $file);
}
