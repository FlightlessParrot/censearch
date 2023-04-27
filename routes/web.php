<?php

use App\Http\Controllers\ArticleCategoryController;

use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProductDisplayerController;
use App\Http\Controllers\SiteMapController;
use App\Http\Controllers\TopProductsController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WelcomeController;
use App\Models\ArticleCategory;
use App\Models\TopArticle;

use Illuminate\Support\Facades\Route;

use Inertia\Inertia;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', WelcomeController::class)->name('Welcome');

Route::get('/search', [ProductDisplayerController::class, 'searchProducts'])->name('ProductsDisplayer');

Route::get('/top/{topId}', function(TopArticle $topId)
{
   $articleCategories=ArticleCategory::all();
   return Inertia::render('Article', ["article"=>$topId, 'articleCategories'=>$articleCategories]);
})->name('Article');

Route::get('/category/{category}',[ArticleCategoryController::class, 'index']
)->name('Categories');

Route::get('/login', [UserController::class, 'index'])->name('loginPage');
Route::post('/login', [UserController::class, 'authenticate'])->name('login');
Route::get('/sitemap',SiteMapController::class);



require __DIR__.'/auth.php';