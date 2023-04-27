<?php

use App\Models\TopArticle;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('top_products',
        function(Blueprint $table)
       {
         $table->id();
         $table->text('description')->nullable();
         $table->foreignIdFor(TopArticle::class);
         $table->string('product_id');
         $table->string('product_origin');
         $table->timestamps();
       } );
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
