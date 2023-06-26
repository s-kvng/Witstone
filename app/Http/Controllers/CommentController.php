<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
        $user = Auth::user();
        $postId = $request->input('post_id'); // Get the post_id value from the request

        $comment = new Comment();
        $comment->content = $request->input('content');
        $comment->user()->associate($user);
       

          // Make sure post_id is not empty before associating it with the comment
        if (!empty($postId)) {
            $comment->post()->associate($postId);
        } else {
            // Handle the case where post_id is not provided or empty
            // You can redirect back with an error message or perform any other desired action
            return redirect()->back()->with('error', 'Invalid post_id');
        }

        $comment->save();

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Comment $comment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Comment $comment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Comment $comment)
    {
        $this->authorize('update', $comment);

        $validated = $request->validate([
            'content' => 'required|string|max:255',
        ]);

        $comment->update($validated);

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comment $comment)
    {
        //
    }
}
