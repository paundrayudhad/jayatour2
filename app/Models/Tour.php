<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Tour extends Model
{
    use HasFactory;

    protected $fillable = [
        'tour_category_id',
        'title',
        'slug',
        'excerpt',
        'description',
        'duration',
        'price',
        'start_city',
        'thumbnail',
        'is_featured',
        'is_international',
    ];

    protected $casts = [
        'is_featured' => 'bool',
        'is_international' => 'bool',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(TourCategory::class, 'tour_category_id');
    }

    public function highlights(): HasMany
    {
        return $this->hasMany(TourHighlight::class);
    }

    public function bundles(): BelongsToMany
    {
        return $this->belongsToMany(Bundle::class)->withPivot('note');
    }

    public function flashSales(): HasMany
    {
        return $this->hasMany(FlashSale::class);
    }
}
