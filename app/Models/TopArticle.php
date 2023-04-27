<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TopArticle extends Model
{
    use HasFactory;

    protected $fillable=[
        'title','article_category_id', 'path', 'full_text', 'short_text'
    ];

  public function ArticleCategory():BelongsTo
    {
        return $this->belongsTo(ArticleCategory::class);
    }
    public function TopProducts(): HasMany
    {
        return $this->hasMany(TopProduct::class);
    }
}
