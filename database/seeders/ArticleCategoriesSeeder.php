<?php

namespace Database\Seeders;

use App\Models\ArticleCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ArticleCategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    static $categories = [
        "Dom i ogród",
        "Elektronika",
        "Supermarket",
        "Zdrowie",
        "Uroda",
        "Rozrywka",
        "Zwierzęta",
        "Motoryzacja",
        "Dla dzieci",
        "Biznes"
    ];
    public function run(): void
    {
        foreach(self::$categories as $category)
        {
       $modelInstance = new ArticleCategory;
       $modelInstance->name=$category;
       $modelInstance->save();

        }
    }
}
