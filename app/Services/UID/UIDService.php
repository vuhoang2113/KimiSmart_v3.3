<?php

namespace App\Services\UID;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

use App\Services\UID\UIDServiceInterface;
use App\Repositories\UID\UIDEloquentRepository;

use Log;

class UIDService implements UIDServiceInterface
{
    protected $uidRepository;

    public function __construct(UIDEloquentRepository $uidRepository)
    {
        $this->uidRepository = $uidRepository;
    }
}
