<?php

namespace App\Http\Controllers;

use App\Api\ApiNokaut;
use App\Models\ArticleCategory;
use App\Models\TopArticle;

use Inertia\Inertia;
use Inertia\Response;

class DisplayTopArticle extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __construct(protected ApiNokaut $nokaut,)
    { }
    public function __invoke(TopArticle $topId): Response
    {
        $articleCategories=ArticleCategory::all();

        $products=array();
        $topProducts=$topId->TopProducts()->get();
        foreach($topProducts as $topProduct)
        {
            $id=$this->nokaut->convertNokautIdToId($topProduct->product_id);
            $product=$this->nokaut->getProductById($id);
            $product['description']=$topProduct->description;
            $product['nokaut_id']=$topProduct->product_id;
            array_push($products,$product);
           
        
        }
        $articles=TopArticle::inRandomOrder()->limit(5)->get();

        return Inertia::render('Article', ["article"=>$topId, 'articleCategories'=>$articleCategories, 'products'=>$products, 'articles'=>$articles]);
    }
}
