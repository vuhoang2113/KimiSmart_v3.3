<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController;
use Illuminate\Http\Request;
use App\Http\Requests\API\FileRequest;
use Illuminate\Http\Response;

use App\Services\File\Document\FileService;

use App\Helpers\APIHelper;
use Log;

class FileController extends BaseController
{
    protected $fileService;

    public function __construct(FileService $fileService)
    {
        $this->fileService = $fileService;
    }

    public function store(FileRequest $request)
    {
        $url = $this->fileService->store($request);
        return $this->apiResponse(false, Response::HTTP_OK, '', [
            'url' => $url,
        ]);
    }
}
