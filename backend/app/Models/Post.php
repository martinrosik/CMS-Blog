<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Post extends Model
{
  
    protected $fillable = [
      'title',
      'content',
      'date'
    ];
}
