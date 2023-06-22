<?php

namespace App\Models;

use APP\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Post extends Model
{
    use HasFactory;


    protected $fillable = [
        'message',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function likes()
    {
        return $this->belongsToMany(User::class , 'liked_post')->withTimestamps();
    }

    public function getLikesCountAttribute()
{
    return $this->likes()->count();
}
}
