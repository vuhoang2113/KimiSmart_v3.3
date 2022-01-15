<?php

namespace App\Services\About;

use Illuminate\Http\Request;
use App\Http\Requests\API\About\StoreRequest;
use App\Http\Requests\API\About\UpdateRequest;

interface AboutServiceInterface
{
    public function index(Request $request);
    public function store(StoreRequest $request);
    public function update($id, UpdateRequest $request);
    public function destroy($id, Request $request);
}
