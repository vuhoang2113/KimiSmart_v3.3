<?php

namespace App\Repositories\User;

use App\Repositories\EloquentRepository;
use App\Repositories\User\UserRepositoryInterface;
use App\Models\User;

class UserEloquentRepository extends EloquentRepository implements UserRepositoryInterface
{
    public function getModel()
    {
        return User::class;
    }

    public function firstByColumn($columnName, $data)
    {
        $user = User::where($columnName, '=', $data)->first();
        return $user;
    }

    public function firstByEmail($email)
    {
        $user = User::select([
            'id',
            'name',
            'email',
            'phone_number',
            'avatar_url',
            'background_url',
            'introduction'
        ])
            ->where('email', '=', $email)->first();
        return $user;
    }

    public function firstByUID($uid)
    {
        $user = User::select([
            'id',
            'name',
            'email',
            'phone_number',
            'avatar_url',
            'background_url',
            'introduction',
            'uid_id',
        ])
            ->whereHas('uid', function ($query) use ($uid) {
                $query->where('code', '=', $uid);
            })
            ->with(['about' => function ($query) {
                $query->select([
                    'id',
                    'order_number',
                    'user_id',
                    'social_network_id',
                    'show_button_text',
                    'button_text',
                    'value'
                ]);
                $query->with(['socialNetwork' => function ($query2) {
                    $query2->select([
                        'id',
                        'name',
                        'placeholder',
                        'href',
                        'href_app',
                        'path_icon_svg',
                    ]);
                }]);
                $query->orderBy('order_number', 'ASC');
            }])
            ->first();
        return $user;
    }

    public function firstById($id)
    {
        $user = User::where('id', '=', $id)->with(['about' => function ($query) {
            $query->select(['*']);
            $query->with('socialNetwork');
            $query->orderBy('order_number', 'ASC');
        }])->first();
        return $user;
    }
}
