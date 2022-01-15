<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Jobs\ExportUID as ExportUIDJob;

class ExportUID extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'batch:export_uid {--status=2}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Export UID';

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
        $status = $this->option("status");
        ExportUIDJob::dispatch($status);
        return 0;
    }
}
