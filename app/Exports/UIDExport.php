<?php

namespace App\Exports;

use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Excel;

use Log;

use App\Exports\BaseExport;
use App\Models\UID;


class UIDExport extends BaseExport
{
    public $fileName = null;
    public $writerType = null;
    public $headers = null;

    protected $status;
    public function __construct($status = 2)
    {
        $this->fileName = 'UID_' . Carbon::now()->format('Y_m_d_H_i_s') . ".xlsx";
        $this->writerType = Excel::XLSX;
        $this->headers = ['Content-Type' => 'text/xlsx'];

        $this->status = $status;
    }

    public function headings(): array
    {
        return [
            'Id',
            'Code',
            'Status',
            'Created At',
            'Updated At',
            'Deleted At',
        ];
    }

    public function map($data): array
    {
        return [
            $data->id,
            $data->code,
            $data->status == false ? 'Not Use' : 'Used',
            $data->created_at,
            $data->updated_at,
            $data->deleted_at,
        ];
    }

    public function columnWidths(): array
    {
        return [
            'A' => 10,
            'B' => 30,
            'C' => 30,
            'D' => 30,
            'E' => 30,
            'F' => 30,
        ];
    }

    public function collection()
    {
        $status = (int)$this->status;
        $data = UID::where(function ($query) use ($status) {
            if ($status == 0) {
                $query->where('status', '=', 0);
            } else if ($status == 1) {
                $query->where('status', '=', 1);
            }
        })
            ->get();
        return $data;
    }
}
