<?php

namespace App\Http\Controllers;

use App\Api\ApiNokaut;
use App\Models\ArticleCategory;
use App\Models\TopArticle;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ArticleAdminController extends Controller
{
    private static $defaultPath = '/images/buty.jpg';

    public function __construct(protected ApiNokaut $nokaut,)
    { }


    public function index(Request $request)
    {
      
        
        $articles = [];
        if ($request->has('search')) {
            $search = '%' . $request->input('search') . '%';
           
            $articles = TopArticle::where('title', 'like', $search)
                ->orWhere('full_text', 'like', $search)->paginate(20);
        } else {
            $articles = TopArticle::paginate(20);
        }
        $articleCategories=ArticleCategory::all();
     
        return Inertia::render('ArticlesAdmin', ['articles' => $articles, 'search' => $request->input('search'),'articleCategories'=>$articleCategories]);
    }
    public function updatePage(Request $request, TopArticle $article)
    {
        $search=$request->input('search');
        $articleCategories=ArticleCategory::all();
        $products=$this->nokaut->getNokautProducts($search);
        $TopProducts=$article->TopProducts()->get();
        $articleTopProducts=[];
        foreach($TopProducts as $p)
        {
            $id=str_replace('nokaut','' ,$p->product_id);
            $topProduct=$this->nokaut->getProductById($id);
            $topProduct['topProductId']=$p->id;
            array_push($articleTopProducts,$topProduct);
        }
        return Inertia::render('UpdateArticle', ['article' => $article, 'articleCategories'=>$articleCategories,'products'=>$products, 'articleTopProducts'=>$articleTopProducts]);
    }

    public function removeArticle(TopArticle $article): RedirectResponse
    {
         $path=$article->path;
         $article->TopProducts->sync([]);
        $article->delete();
        
        if($path!==self::$defaultPath)
        {
        Storage::delete($path);
        }
        return to_route('TopPage');
    }
    public function updateArticle(Request $request, TopArticle $article): RedirectResponse
    {
        $request->validate([
            'title'=>'required',
            'article_category_id'=>'required'
        ]);
        $data = $request->except('file');
        $article->update($data);
        if ($request->hasFile('file') && $request->file('file')->isValid()) {
            $path = $request->file('file')->store('public/images/' . $article->id);
            $article->path = $path;
        }
        
        $article->save();
        return to_route('updatePage', ['article' => $article->id]);
    }

    public function addArticle(Request $request): RedirectResponse
    {
        $request->validate([
            'title'=>'required',
            'article_category_id'=>'required'
        ]);
        $data = $request->except('file');
        $article = TopArticle::create($data);
        if ($request->hasFile('file') && $request->file('file')->isValid()) {
            $path = $request->file('file')->store('public/images/' . $article->id);
            $article->path = $path;
        } else {
            $article->path = self::$defaultPath;
        }
        $article->save();
        $articleCategories=ArticleCategory::all();
        return to_route('updatePage', ['article' => $article->id, 'articleCategories'=>$articleCategories]);
    }
}
