<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class NokautCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('nokaut_categories')->truncate();
        $file = Storage::get('/public/nokaut.xml');
        $xml =simplexml_load_string($file);
        foreach($xml->categories->category as $category)
        {

            DB::table('nokaut_categories')->insert([
                'name' => $category,
                'nokaut_category_id' => $category['id'],
                'nokaut_parent_id' => $category['parent']
            ]);
        }
      
    }
}
