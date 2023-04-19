<?php

use App\Http\Controllers\ArticleAdminController;
use App\Http\Controllers\CategoryAdminController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('guest')->group(function () {
  


});

Route::middleware('auth')->group(function () {
    Route::get('/admin/categories', [CategoryAdminController::class, 'index'])->name('CategoriesPage');
    Route::post('/admin/addcategory/{category}', [CategoryAdminController::class, 'create'])->name('addCategory');
    Route::get('/admin/category/{category}/delete', [CategoryAdminController::class, 'delete'])->name('deleteCategory');
    
    Route::get('/admin/articles', [ArticleAdminController::class, 'index'])->name('TopPage');
    Route::get('/admin/update/article/{article}', [ArticleAdminController::class, 'updatePage'])->name('updatePage');
    Route::post('/admin/create/article', [ArticleAdminController::class, 'addArticle'])->name('addArticle');
    Route::put('/admin/update/article/{article}', [ArticleAdminController::class, 'updateArticle'])->name('updateArticle');
    Route::delete('/admin/remove/article/{article}', [ArticleAdminController::class, 'removeArticle'])->name('removeArticle');

    Route::get('/password/update', [UserController::class, 'changePasswordPage'])->name('ChangePasswordPage');
    Route::put('/password/update',[UserController::class, 'changePassword'])->middleware('check.password')->name('changePassword');
    Route::get('/admin/categors', function(){return Inertia::render('CategoryAdmin');})->name('Logout');
   Route::get('/logout',[UserController::class,'logout']);
});
