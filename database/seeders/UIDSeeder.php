<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

use App\AppConst;
use App\Models\UID;
use Log;

class UIDSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        UID::factory()->count(AppConst::NUMBER_OF_UID_SEEDER)->create();
    }
}
