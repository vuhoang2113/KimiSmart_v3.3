<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Exception;
use Illuminate\Support\Facades\Log;

use App\Exports\UIDExport;

class ExportUID extends MasterJob
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    protected $status;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($status)
    {
        $this->status = $status;
        $this->batchName = 'Export UID Batch';
        $this->setChanelLog();
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        try {
            $this->logStart();
            $this->export();
            $this->logEnd();
        } catch (\Exception $ex) {
            $this->log($ex->getMessage(), 'debug');
            parent::logEnd();
        }
    }

    private function export()
    {
        try {
            return (new UIDExport($this->status))->store('uid.xlsx');
        } catch (Exception $ex) {
            $this->log($ex->getMessage(), 'debug');
        }
    }

    protected function logStart()
    {
        parent::logStart();
        $this->log("Status = $this->status");
    }
}
