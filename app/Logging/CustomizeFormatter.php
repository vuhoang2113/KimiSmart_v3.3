<?php


namespace App\Logging;

use Monolog\Formatter\LineFormatter;

class CustomizeFormatter
{
    public function __invoke($logger)
    {
        $dateFormat = 'Y-m-d H:i:s';
        foreach ($logger->getHandlers() as $handler) {
            $handler->setFormatter(new LineFormatter(
                "[%datetime%] %message% \n", $dateFormat
            ));
        }
    }
}
