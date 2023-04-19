<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TestProduct;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use PhpParser\Node\Expr\Cast\Array_;

class ProductDisplayerController extends Controller
{
   
    static $url='http://nokaut.io/api/v2/products?fields=id,url,photo_id,title&limit=50&phrase=';
    public function searchProducts(Request $request) 
    {
        $search = $request->input('search');
       // $testProducts= TestProduct::paginate(20);   
       
        //$testProductsWithoutPagination= TestProduct::all();    
        $nokautProducts=$this->getNokautProducts($search);
       
        return Inertia::render('ProductsDisplayer', ["products"=>$nokautProducts, "search"=>$search]);
    }
    private function getNokautProducts($search)
    {
         $response = Http::withToken($_ENV['NOKAUT_KEY'])->get(self::$url.$search)->throw();
        $body=$response->json();
       // $array=json_decode($body, true);
       //print_r($body) ;
        $products=[];
        foreach($body['products'] as $product)
        {
            
            $myProduct=Array(
                'id'=>"", 
                'path'=>'',
                'name'=>'',
                'link'=>''

            );
            $pre1=substr($product['photo_id'],0,2);
            $pre2=substr($product['photo_id'],2,2);
            $urlStart='http://offers.gallery/p-';
            // rozmiar, np. 90x90, 130x130 lub 500x500
            $size='130x130';
            $url=$urlStart.$pre1.'-'.$pre2.'-'.$product['photo_id'].$size.'/'.$product['title'].'.jpg';
            $myProduct['id']='nokaut'.$product['id'];
            $myProduct['path']=$url;
            $myProduct['name']=$product['title'];
            $myProduct['link']=$product['url'];
            array_push($products, $myProduct);
        }
        return $products;
    }
}
