<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;
use Illuminate\Support\Facades\Storage;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::truncate();
        
        $file = Storage::get('/public/kategorie.xml');
        $xml =simplexml_load_string($file);
        foreach($xml->Worksheet->Table->Row as $category)
        {
            $value=$category->Cell->Data;
            if(Category::where('category',$value )->doesntExist())
            {
            Category::insert([
                'category' => $value,
                
              
            ]);
        }
        }
    }
}
