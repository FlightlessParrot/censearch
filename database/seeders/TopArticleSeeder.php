<?php

namespace Database\Seeders;

use App\Models\TopArticle;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TopArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TopArticle::factory(40)->create();
    }
}
