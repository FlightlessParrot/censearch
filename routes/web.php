<?php

use App\Http\Controllers\ArticleCategoryController;

use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProductDisplayerController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WelcomeController;
use App\Models\TopArticle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
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

Route::get('/category/{category}',[ArticleCategoryController::class, 'index']
)->name('Categories');

Route::get('/login', [UserController::class, 'index'])->name('loginPage');
Route::post('/login', [UserController::class, 'authenticate'])->name('login');

Route::get('/foo', function () {
   Artisan::call('storage:link');
   Artisan::call('config:cache');
});

require __DIR__.'/auth.php';