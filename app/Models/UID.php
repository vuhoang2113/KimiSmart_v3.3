<?php

namespace App\Models;

use App\Models\BaseModel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;

class UID extends BaseModel
{
    use HasFactory;
    protected $table = 'uids';
    protected $primaryKey = 'id';
    protected $fillable = [
        'code',
        'status',
    ];

    public function user()
    {
        return $this->hasOne(User::class, 'uid_id', 'id');
    }
}
