<?php

namespace App\Http\Controllers;

use App\Models\ArticleCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\TopArticle;
use App\Models\Category;
class WelcomeController extends Controller
{
    
    public function __invoke()
    {
        $articles=TopArticle::inRandomOrder()->limit(8)->get();
        $categories=Category::inRandomOrder()->limit(20)->get();
        $otherChoices=Category::inRandomOrder()->limit(20)->get();
        $articleCategories=ArticleCategory::all();
        return Inertia::render('Welcome', 
        ['articles'=>$articles,
        'categories'=>$categories,
        'otherChoices'=>$otherChoices,
        'articleCategories'=>$articleCategories]);
    }
    
}
