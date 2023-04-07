<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\TopArticle;
use App\Models\Category;
class WelcomeController extends Controller
{
    
    public function __invoke()
    {
        $articles=TopArticle::inRandomOrder()->limit(5)->get();
        $categories=Category::inRandomOrder()->limit(20)->get();
        $otherChoices=Category::inRandomOrder()->limit(20)->get();
        return Inertia::render('Welcome', 
        ['articles'=>$articles,
        'categories'=>$categories,
        'otherChoices'=>$otherChoices]);
    }
    
}
