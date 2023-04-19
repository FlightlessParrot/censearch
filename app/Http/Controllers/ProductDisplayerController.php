<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TestProduct;
use Inertia\Inertia;
class ProductDisplayerController extends Controller
{
    public function searchProducts(Request $request) 
    {
        $search = $request->input('search');
       // $testProducts= TestProduct::paginate(20);   
        $testProductsWithoutPagination= TestProduct::all();    
        return Inertia::render('ProductsDisplayer', ["products"=>$testProductsWithoutPagination, "search"=>$search]);
    }
}
