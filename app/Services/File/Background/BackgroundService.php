<?php

namespace App\Services\File\Background;

use Illuminate\Http\Request;
use App\Http\Requests\API\BackgroundRequest;
use Illuminate\Support\Facades\Storage;
use App\Services\File\Background\BackgroundServiceInterface;

class BackgroundService implements BackgroundServiceInterface
{
    public function store(BackgroundRequest $request)
    {
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $originalName = $file->getClientOriginalName();

            $name = time() . '_' . $originalName;
            $destinationPath = storage_path('app/public/images');

            $file->move($destinationPath, $name);
            return asset(Storage::url('images/' . $name));
        } else {
            return null;
        }
    }
}
