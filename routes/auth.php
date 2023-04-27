<?php

use App\Http\Controllers\ArticleAdminController;
use App\Http\Controllers\CategoryAdminController;
use App\Http\Controllers\TopProductsController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('guest')->group(function () {
  


});

Route::middleware('auth')->group(function () {
    Route::get('/admin/categories', [CategoryAdminController::class, 'index'])->name('CategoriesPage');
    Route::post('/admin/addcategory/{category}', [CategoryAdminController::class, 'create'])->name('addCategory');

    Route::get('/admin/category/{category}/delete', [CategoryAdminController::class, 'delete'])->name('deleteCategory');
    Route::get('/admin/category/{category}/update', [CategoryAdminController::class, 'updateIndex'])->name('updateCategoryPage');
    Route::post('/admin/category/{category}/update', [CategoryAdminController::class, 'update'])->name('updateCategory');

    
    Route::get('/admin/articles', [ArticleAdminController::class, 'index'])->name('TopPage');
    Route::get('/admin/update/article/{article}', [ArticleAdminController::class, 'updatePage'])->name('updatePage');
    Route::post('/admin/create/article', [ArticleAdminController::class, 'addArticle'])->name('addArticle');
    Route::put('/admin/update/article/{article}', [ArticleAdminController::class, 'updateArticle'])->name('updateArticle');
    Route::delete('/admin/remove/article/{article}', [ArticleAdminController::class, 'removeArticle'])->name('removeArticle'); 

    Route::get('admin/article/{article}/top-product/{product}',[TopProductsController::class, 'updatePage'])->name('UpdateTopProductPage');
    Route::put('admin/article/{article}/top-product/{product}',[TopProductsController::class, 'updateProductDescription'])->name('UpdateTopProduct');
    Route::post('admin/article/{article}/add-top-product',[TopProductsController::class, 'addTopProduct'])->name('addTopProduct');
    Route::put('admin/article/{article}/top-product/{product}/update',[TopProductsController::class, 'updateProductDescription'])->name('updateTopProduct');
    Route::delete('admin/article/{article}/top-product/{product}/delete',[TopProductsController::class, 'deleteTopProduct'])->name('deleteTopProduct');

    Route::get('/password/update', [UserController::class, 'changePasswordPage'])->name('ChangePasswordPage');
    Route::put('/password/update',[UserController::class, 'changePassword'])->middleware('check.password')->name('changePassword');

    Route::get('/logout',[UserController::class,'logout'])->name('Logout');    

   
    
});
