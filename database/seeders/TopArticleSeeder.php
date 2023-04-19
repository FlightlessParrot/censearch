<?php

namespace Database\Seeders;

use App\Models\TopArticle;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Factories\Sequence;
class TopArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TopArticle::truncate();
        TopArticle::factory()->count(200)->
        state(
        new Sequence(
            ['category'=>"Dom i ogród"],
            ['category'=>"Elektronika"],
            ['category'=>"Supermarket"],
            ['category'=>"Zdrowie"],
        )
        )->create();
    }
}