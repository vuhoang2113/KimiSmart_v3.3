<?php

namespace App\Repositories\About;

use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Exception;

use App\Repositories\EloquentRepository;
use App\Repositories\About\AboutRepositoryInterface;
use App\Models\About;

class AboutEloquentRepository extends EloquentRepository implements AboutRepositoryInterface
{
    public function getModel()
    {
        return About::class;
    }
    public function maxOrderNumber($user_id)
    {
        return $this->_model
            ->where('user_id', $user_id)
            ->max('order_number') === null ? -1 : $this->_model->where('user_id', $user_id)->max('order_number');
    }

    public function updateOwnerAbout($params = [])
    {
        $showButtonText = Arr::get($params, 'show_button_text');
        $buttonText = Arr::get($params, 'button_text');
        $value = Arr::get($params, 'value');

        $this->_model
            ->where('id', '=', Arr::get($params, 'id'))
            ->where('user_id', '=', Auth::id())
            ->update([
                'show_button_text' => $showButtonText,
                'button_text' => $buttonText,
                'value' => $value
            ]);
        return true;
    }

    public function updateList($payload = [])
    {
        DB::beginTransaction();
        try {
            foreach ($payload as $key => $value) {
                $this->_model
                    ->where('id', '=', Arr::get($value, 'id'))
                    ->where('user_id', '=', Arr::get($value, 'user_id'))
                    ->update([
                        'order_number' => Arr::get($value, 'order_number', 0),
                    ]);
            }
            DB::commit();
            return true;
        } catch (Exception $ex) {
            Log::error($ex->getMessage());
            DB::rollBack();
            return false;
        }
    }
}
