<?php

namespace Database\Factories;

use App\Models\UID;
use App\AppConst;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UIDFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = UID::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'code' => Str::random(AppConst::LENGTH_OF_UID),
        ];
    }
}
