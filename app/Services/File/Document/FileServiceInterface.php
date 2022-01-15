<?php

namespace App\Services\File\Document;

use App\Http\Requests\API\FileRequest;

interface FileServiceInterface
{
    public function store(FileRequest $file);
}
