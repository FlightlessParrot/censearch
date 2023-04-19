<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TopArticle>
 */
class TopArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
        'title'=>fake()->sentence(),
        'short_text'=>fake()->text(),
        'full_text'=>fake()->text(1000),
        'path'=>'/images/buty.jpg',
        'category'=>'home'
        ];
    }
}
