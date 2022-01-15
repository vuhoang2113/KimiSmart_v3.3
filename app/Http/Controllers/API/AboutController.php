<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;

use App\Http\Controllers\API\BaseController;
use App\AppConst;

use App\Services\About\AboutService;

use App\Http\Requests\API\About\StoreRequest;
use App\Http\Requests\API\About\UpdateRequest;

class AboutController extends BaseController
{
    protected $aboutService;

    public function __construct(AboutService $aboutService)
    {
        $this->aboutService = $aboutService;
    }

    public function index(Request $request)
    {
        $list = $this->aboutService->index($request);
        return $this->apiResponse(false, Response::HTTP_OK, AppConst::MESSAGE_SUCCESS, $list);
    }

    public function store(StoreRequest $request)
    {
        $result = $this->aboutService->store($request);
        return $this->apiResponse(false, Response::HTTP_OK, AppConst::MESSAGE_SUCCESS, $result);
    }

    public function update($id, UpdateRequest $request)
    {
        $result = $this->aboutService->update($id, $request);
        return $this->apiResponse(false, Response::HTTP_OK, AppConst::MESSAGE_SUCCESS, $result);
    }

    public function updateList(Request $request)
    {
        $result = $this->aboutService->updateList($request->all());
        return $this->apiResponse(false, Response::HTTP_OK, AppConst::MESSAGE_SUCCESS, $result);
    }

    public function destroy($id, Request $request)
    {
        $result = $this->aboutService->destroy($id, $request);
        return $this->apiResponse(false, Response::HTTP_OK, AppConst::MESSAGE_SUCCESS, $result);
    }
}
