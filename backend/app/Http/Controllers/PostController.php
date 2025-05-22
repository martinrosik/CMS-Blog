<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index() 
{
    $posts = Post::all()->map(function($post) {
        return [
            'id' => $post->id,
            'title' => $post->title,
            'content' => $post->content,
            'date' => $post->created_at->format('Y-m-d'),
        ];
    });

    return response()->json($posts);
}


    public function store(Request $request) 
    {
        $validated = $request->validate([
            'title' => 'required|max:1000',
            'content' => 'required|min:2',
        ]);

        $post = Post::create($validated);

        return response()->json([
            'message' => 'Post created successfully!',
            'post' => $post
        ], 201);
    }

    public function destroy($id)
    {
        $post = Post::find($id);

        if (!$post) {
            return response()->json(['message' => 'Post not found.'], 404);
        }

        $post->delete();

        return response()->json(['message' => 'Post deleted successfully.']);
    }

    public function update(Request $request, $id)
    {
        $post = Post::find($id);

        if (!$post) {
            return response()->json(['message' => 'Post not found.'], 404);
        }

        $validated = $request->validate([
            'title' => 'required|max:500',
            'content' => 'required|min:2',
        ]);

        $post->update($validated);

        return response()->json($post);
    }

    public function show($id)
    {
        $post = Post::find($id);

        if (!$post) {
            return response()->json(['message' => 'Post not found.'], 404);
        }

        return response()->json($post);
    }
}
