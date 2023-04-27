<?php

namespace App\Api;


use Illuminate\Support\Facades\Http;


class ApiNokaut
{
    static $url='http://nokaut.io/api/v2/products?fields=id,url,photo_id,click_url,title&limit=50&phrase=';
    static $productFromIdUrl= ['http://nokaut.io/api/v2/products/','?fields=id,url,photo_id,click_url,title'];
    
    public function getNokautProducts($search):array
    {
         $response = Http::withToken($_ENV['NOKAUT_KEY'])->get(self::$url.$search)->throw();
        $body=$response->json();
        $products=[];
        foreach($body['products'] as $product)
        {
            if(!$product['click_url'])
            {
                continue;
            }
           $myProduct=$this->ArrayFromProduct($product);
            array_push($products, $myProduct);
        }
        return $products;
    }
    private function ArrayFromProduct(array $product):array
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
            $size='200x200';
            $url=$urlStart.$pre1.'-'.$pre2.'-'.$product['photo_id'].$size.'/'.$product['title'].'.jpg';
            $myProduct['id']='nokaut'.$product['id'];
            $myProduct['path']=$url;
            $myProduct['name']=$product['title'];
            $myProduct['link']='https://www.nokaut.pl'.($product['click_url']);
            return $myProduct;
    }
    public function getProductById(string $id):array
    {
        $response = Http::withToken($_ENV['NOKAUT_KEY'])->get(self::$productFromIdUrl[0].$id.self::$productFromIdUrl[1])->throw();
        $body=$response->json();
        $myProduct=$this->ArrayFromProduct($body);

        return $myProduct;

    }
}
