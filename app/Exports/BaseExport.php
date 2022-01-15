<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Illuminate\Contracts\Support\Responsable;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithColumnWidths;

class BaseExport implements FromCollection, Responsable, WithHeadings, WithMapping, WithColumnWidths
{
    use Exportable;

    public function __construct()
    {
        //
    }
    public function headings(): array
    {
        //
    }
    public function map($data): array
    {
        //
    }
    public function columnWidths(): array
    {
        //
    }
    public function collection()
    {
        //
    }
}
