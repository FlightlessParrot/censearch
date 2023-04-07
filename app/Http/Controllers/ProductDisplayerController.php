<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TestProduct;
use Inertia\Inertia;
class ProductDisplayerController extends Controller
{
    public function searchProducts(Request $request) 
    {
        $testProducts= TestProduct::paginate(20);        
        return Inertia::render('ProductsDisplayer', ["products"=>$testProducts]);
    }
}
