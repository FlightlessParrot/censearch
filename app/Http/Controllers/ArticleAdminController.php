<?php

namespace App\Http\Controllers;

use App\Models\TopArticle;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ArticleAdminController extends Controller
{
    private static $defaultPath = '/images/buty.jpg';




    public function index(Request $request)
    {
        $articles = [];
        if ($request->has('search')) {
            $search = '%' . $request->input('search') . '%';
            $articles = TopArticle::where('title', 'like', $search)
                ->orWhere('full_text', 'like', $search)
                ->orWhere('category', 'like', $search)
            ->paginate(20);
        } else {
            $articles = TopArticle::paginate(20);
        }
        return Inertia::render('ArticlesAdmin', ['articles' => $articles, 'search' => $request->input('search')]);
    }
    public function updatePage( TopArticle $article)
    {
        
        return Inertia::render('UpdateArticle', ['article' => $article]);
    }

    public function removeArticle(TopArticle $article): RedirectResponse
    {
         $path=$article->path;
        $article->delete();
        Storage::delete($path);
        return to_route('TopPage', ['message' => 'Artykuł został pomyślnie usunięty']);
    }
    public function updateArticle(Request $request, TopArticle $article): RedirectResponse
    {
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
        $data = $request->except('file');
        $article = TopArticle::create($data);
        if ($request->hasFile('file') && $request->file('file')->isValid()) {
            $path = $request->file('file')->store('public/images/' . $article->id);
            $article->path = $path;
        } else {
            $article->path = self::$defaultPath;
        }
        $article->save();
        return to_route('updatePage', ['article' => $article->id]);
    }
}
