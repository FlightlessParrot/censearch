<?php

use App\Http\Controllers\ProductDisplayerController;
use App\Http\Controllers\WelcomeController;
use App\Models\TopArticle;
use Illuminate\Http\Request;
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
   return Inertia::render('Article', ["article"=>$topId]);
})->name('Article');


require __DIR__.'/auth.php';
