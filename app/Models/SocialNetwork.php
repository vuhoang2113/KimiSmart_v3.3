<?php

namespace App\Models;

use App\Models\BaseModel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\About;

class SocialNetwork extends BaseModel
{
    use HasFactory;
    protected $table = 'social_networks';
    protected $primaryKey = 'id';
    protected $fillable = [
        'name',
        'placeholder',
        'href',
        'href_app',
        'path_icon_svg',
    ];

    public function about()
    {
        return $this->hasMany(About::class, 'network_social_id', 'id');
    }
}
