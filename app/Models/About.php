<?php

namespace App\Models;

use App\Models\BaseModel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;
use App\Models\SocialNetwork;

class About extends BaseModel
{
    use HasFactory;
    protected $table = 'about';
    protected $primaryKey = 'id';
    protected $fillable = [
        'order_number',
        'user_id',
        'social_network_id',
        'show_button_text',
        'button_text',
        'value',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function socialNetwork()
    {
        return $this->belongsTo(SocialNetwork::class, 'social_network_id', 'id');
    }
}
