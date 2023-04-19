<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TopArticle extends Model
{
    use HasFactory;

    protected $fillable=[
        'title','category', 'path', 'full_text', 'short_text'
    ];
}
