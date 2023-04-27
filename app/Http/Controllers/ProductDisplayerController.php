<?php

namespace App\Http\Controllers;

use App\Models\ArticleCategory;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Api\ApiNokaut;
use Inertia\Inertia;


class ProductDisplayerController extends Controller
{
   public function __construct(protected ApiNokaut $nokaut,)
   { }
    
    public function searchProducts(Request $request) 
    {
        $validated=$request->validate(
            ['search'=>['nullable','max:50']]
        );
        $search = $request->input('search');
        $articleCategories=ArticleCategory::all();
        //$testProducts= TestProduct::paginate(20);   
        //$testProductsWithoutPagination= TestProduct::all();    

        

        $nokautProducts=$this->nokaut->getNokautProducts($search);
        $description='';
        if(sizeof($nokautProducts) && $search!== null && Category::where('category', $search)->doesntExist() )
        {
           $category=new Category;
           $category->category=$search;
           $category->save();
        }
        if(!sizeof($nokautProducts) && $search!== null && Category::whereExist('category', $search))
        {
            $category=Category::where('category', $search)->first();
            $category->delete();
        }
        if(sizeof($nokautProducts) && $search!== null && Category::whereExist('category', $search))
    {
         $model=Category::where('category', $search)->first();
         $description=$model->description;
    } 

        return Inertia::render('ProductsDisplayer', ["products"=>$nokautProducts, "search"=>$search, 'articleCategories'=>$articleCategories,'description'=>$description]);
    }
   
}
