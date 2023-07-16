<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */

     public function index(): Response
     {
         $posts = Post::with('user:id,name')
             ->withCount([
                 'likes as liked' => function($q) {
                     $q->where('user_id', auth()->id());
                 }
             ])
             ->withCasts(['liked' => 'boolean'])
             ->latest()
             ->get();
     
         // Retrieve the likes count for each post
         $posts->map(function ($post) {
             $post->likesCount = $post->getLikesCountAttribute();
             $post->commentCount = $post->getCommentCountAttribute();
             return $post;
         });
     
         return Inertia::render('Post/Index', [
             'posts' => $posts,
         ]);
     }
     



    // public function index(): Response
    // {
    //     return Inertia::render('Post/Index', [
            
    //         'posts' => Post::with('user:id,name')
    //                 ->withCount([
    //                     'likes as liked' => function($q){
    //                         $q->where('user_id', auth()->id());
    //                     }
    //                 ])->withCasts(['liked' => 'boolean'])
    //                 ->latest()->get(),
    //         'totalLikes' => Post::
    //     ]);
    // }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Post/Form', [
            //
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {   
        
        $validated = $request->validate([
            'message' => 'required|string|max:300',
        ]);

        $request->user()->posts()->create($validated);

        return redirect(route('posts.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post): Response
    {

        //use the load method to eager load the user and comments.user relationships
        $post->load('user', 'comments.user')->loadCount('likes');

        $post->liked = $post->likes->contains('user_id', Auth::id()); // Eager load related user and comments with their respective users
        
        //get total count of likes for post
        $post->likesCount = $post->getLikesCountAttribute();
        //
        $post->commentCount = $post->getCommentCountAttribute();

        return Inertia::render('Post/PostDetail', [
            'post' => $post
        ]);   
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        $this->authorize('update', $post);

        $validated = $request->validate([
            'message' => 'required|string|max:300',
        ]);

        $post->update($validated);

        return redirect(route('posts.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post): RedirectResponse
    {
        $this->authorize('delete', $post);

        $post->delete();

        return redirect(route("posts.index"));
    }
}
