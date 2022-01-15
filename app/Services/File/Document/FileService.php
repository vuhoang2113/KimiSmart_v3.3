<?php

namespace App\Services\File\Document;

use Illuminate\Http\Request;
use App\Http\Requests\API\FileRequest;
use Illuminate\Support\Facades\Storage;
use App\Services\File\Document\FileServiceInterface;

class FileService implements FileServiceInterface
{
    public function store(FileRequest $request)
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
