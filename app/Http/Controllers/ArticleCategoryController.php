<?php

namespace App\Http\Controllers;
use App\Models\TopArticle;
use Illuminate\Http\Request;
use Inertia\Inertia;
class ArticleCategoryController extends Controller
{
    function index(string $category)
    {
       $article= TopArticle::where('category',$category)->get();
        return Inertia::render('Top', ['products'=>$article]);
    }
}
