<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;
class CategoryAdminController extends Controller
{
   
    public function index(Request $request)
    {
        $categories= []; 
       
        if(!$request->has('search'))
        {
            $categories=Category::paginate(30);
        }
        else{
            $search='%'.trim($request->input('search')).'%';
            $categories=Category::where('category','LIKE',$search)->paginate(30);
        }
            
        
        return Inertia::render('CategoryAdmin',['categories'=>$categories, 'search'=>$request->input('search')]);
    }
    public function delete(Category $category):RedirectResponse
    {
        $category->delete();
       return to_route('CategoriesPage');
    }
    public function create(string $category):RedirectResponse
    {
      Category::firstOrCreate([
            'category'=>$category
        ]);
        return to_route('CategoriesPage');
    }
    public function update(Request $request, Category $category) :RedirectResponse
    {
        $category->description=$request->input('description');
        $category->save();
        
        return to_route('CategoriesPage');
    }
    public function updateIndex(Category $category)
    {
        return Inertia::render('UpdateCategory',['category'=>$category]);
    }
}
