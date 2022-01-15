<?php

namespace App\Logging;

use Monolog\Logger;
use Monolog\Handler\RotatingFileHandler;
use Carbon\Carbon;
use Monolog\Formatter\LineFormatter;

class CustomizeFileName
{
    /**
     * Create a custom Monolog instance.
     *
     * @param  array  $config
     * @return \Monolog\Logger
     */
    public function __invoke($logger)
    {
        $dateFormat = 'Y-m-d H:i:s';
        foreach ($logger->getHandlers() as $handler) {
            if ($handler instanceof RotatingFileHandler) {
                $handler->setFilenameFormat("{filename}_{date}_" . Carbon::now()->format('His'), 'Ymd')
                    ->setFormatter(new LineFormatter(
                        "[%datetime%] %message% \n",
                        $dateFormat
                    ));;
            }
        }
    }
}
