<?php

namespace App\Http\Controllers;

use App\Models\ArticleCategory;
use App\Models\TopArticle;
use Illuminate\Http\Request;
use Inertia\Inertia;
class ArticleCategoryController extends Controller
{
    function index(ArticleCategory $category)
    {
       $article= $category->TopArticles()->get();
       $articleCategories = ArticleCategory::all();
        return Inertia::render('Top', ['products'=>$article,'articleCategories'=> $articleCategories]);
    }
    
}
