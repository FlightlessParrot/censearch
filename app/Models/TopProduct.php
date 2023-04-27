<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TopProduct extends Model
{
    use HasFactory;
    protected $fillable=[
        'product_id','top_article_id','description','product_origin'
    ];
    public function TopArticle():BelongsTo
    {
       return $this->belongsTo(TopArticle::class);
    }
}
