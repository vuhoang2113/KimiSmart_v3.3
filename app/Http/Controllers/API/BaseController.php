<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Http\Response;
use Illuminate\Support\Collection;

use Illuminate\Support\Facades\Log;

class BaseController extends Controller
{
    public function __construct()
    {
        //
    }

    protected function apiResponse(
        $isError = true,
        $responseCode = Response::HTTP_INTERNAL_SERVER_ERROR,
        $message = '',
        $data = []
    ) {
        if ($isError === false) {
            if (empty($data) || $data === null) {
                return response()->json(
                    new JsonResponse(['Resources not found']),
                    Response::HTTP_NOT_FOUND
                );
            }
        }

        $result = [
            'success' => !$isError,
            'status_code' => $responseCode,
            'message' => $message,
            'data' => $data
        ];

        return response()->json($result, $responseCode);
    }
}
