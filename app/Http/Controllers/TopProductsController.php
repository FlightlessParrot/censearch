<?php

namespace App\Http\Controllers;

use App\Api\ApiNokaut;
use App\Models\TopArticle;
use App\Models\TopProduct;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

use Inertia\Response;


class TopProductsController extends Controller
{
    public function __construct(protected ApiNokaut $nokaut,)
    { }
   
 
    public function addTopProduct(Request $request, TopArticle $article): RedirectResponse
    {
        $request->validate([
           
            'product_id'=>'required',
            'product_origin'=>'required'
        ]);
        $id=$request->input('product_id');
        $origin=$request->input('product_origin');
        $product=new TopProduct(['product_id'=>$id, 'product_origin'=>$origin]);
        $article->TopProducts()->save($product);
        return to_route('updatePage',$article->id);
    }

    public function deleteTopProduct(TopArticle $article, TopProduct $product): RedirectResponse
    {
        $product->delete();
        return to_route('updatePage',$article->id);
    }
    public function updateProductDescription(Request $request, TopArticle $article, TopProduct $product): RedirectResponse
    {
        //update
        $request->validate(['description'=>'required']);
        $product->description=$request->input('description');
        $product->save();
        $product->refresh();


        
        return to_route('updatePage',[$article->id]);
    }
    public function UpdatePage(TopArticle $article,TopProduct $product):Response
    { 
        $id=str_replace('nokaut','' ,$product->product_id);
        $topProduct=$this->nokaut->getProductById($id);
        $topProduct['topProductId']=$product->id;
        $topProduct['description']=$product->description;
    return Inertia('UpdateTopProduct',['product'=>$topProduct, 'article'=>$article]);
    }

}
