<?php

namespace App\Repositories\User;

interface UserRepositoryInterface
{
    public function firstByColumn($columnName, $data);
    public function firstByEmail($email);
    public function firstByUID($uid);
    public function firstById($id);
}
