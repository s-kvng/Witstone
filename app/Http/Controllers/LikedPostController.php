<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Exists;

class LikedPostController extends Controller
{
    //

    public function toggle(Post $post)
    {

        $post->likes()->toggle(auth()->id());

        

        return redirect()->back();
    }
}

// if($post->likes()->where('user_id', auth()->id())->exists()){
        //     $post->likes()->detach(auth()->id());
            
        // }
        // else{
        //     $post->likes()->attach(auth()->id());
        // }
