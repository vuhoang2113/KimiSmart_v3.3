<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Jobs\CreateUID as CreateUIDJob;

class CreateUID extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'batch:create_uid {number}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create UID';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $number = $this->argument('number');
        CreateUIDJob::dispatch($number);
        return 0;
    }
}
