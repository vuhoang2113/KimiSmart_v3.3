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

use App\Models\UID;

class CreateUID extends MasterJob
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $number;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($number)
    {
        $this->number = $number;
        $this->batchName = 'Create UID Batch';
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
            $this->validate();
            $this->create();
            $this->logEnd();
        } catch (\Exception $ex) {
            $this->log($ex->getMessage(), 'debug');
            parent::logEnd();
        }
    }

    private function validate()
    {
        if ($this->number <= 0) {
            throw new Exception('Number must be a positive number', 402);
        }

        if ($this->number >= 10000) {
            throw new Exception('Number must be less than 10000', 402);
        }
    }

    private function create()
    {
        try {
            UID::factory()->count($this->number)->create();
        } catch (Exception $ex) {
            $this->log($ex->getMessage(), 'debug');
        }
    }

    protected function logStart()
    {
        parent::logStart();
        $this->log("Procesing: $this->number");
    }

    protected function logEnd()
    {
        $this->log("Created: $this->number");
        parent::logEnd();
    }
}
