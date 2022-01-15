<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

use Illuminate\Support\Facades\Log;
use Symfony\Component\Console\Output\ConsoleOutput;

class MasterJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $batchName;
    protected $logChannel;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->batchName = '';
        $this->logChannel = 'batches';
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        //
    }

    protected function console($message)
    {
        $output = new ConsoleOutput();
        $output->writeln($message);
    }

    protected function setChanelLog($channelLogName = 'batches')
    {
        $this->logChannel = $channelLogName;
    }

    /**
     * log
     *
     * @param  mixed $message
     * @param  mixed $level
     * @param  mixed $context
     * @param  mixed $console
     * @return void
     */
    protected function log($message, $level = 'info', $context = [], $console = true)
    {
        Log::channel($this->logChannel)->{$level}($message, $context);
        if ($console) {
            $this->console($message . "\n");
        }
    }

    /**
     * logChannel
     *
     * @param  mixed $channel
     * @param  mixed $message
     * @param  mixed $level
     * @param  mixed $context
     * @param  mixed $console
     * @return void
     */
    protected function logByChannel($channel, $message, $level = 'info', $context = [], $console = true)
    {
        Log::channel($channel)->{$level}($message, $context);
        if ($console) {
            $this->console($message . "\n");
        }
    }

    protected function logStart()
    {
        $this->log("$this->batchName is starting ...");
    }

    protected function logEnd()
    {
        $this->log("$this->batchName ended.");
    }
}
