<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Sitemap\SitemapGenerator;
class SiteMapController extends Controller
{
   public function __invoke()
   {
    SitemapGenerator::create(env('APP_URL','https://rankmax.pl'))->writeToFile('storage/images/sitemap.xml');

   }
}
