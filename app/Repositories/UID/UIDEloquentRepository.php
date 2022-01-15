<?php

namespace App\Repositories\UID;

use App\Repositories\EloquentRepository;
use App\Repositories\UID\UIDRepositoryInterface;
use App\Models\UID;

class UIDEloquentRepository extends EloquentRepository implements UIDRepositoryInterface
{
    public function getModel()
    {
        return UID::class;
    }

    public function findByCode($code)
    {
        return UID::where('code', '=', $code)->first();
    }
}
