<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Posts;
use App\Models\Category;
use App\Models\Tag;


class PostsController extends Controller
{
   function index()
    {
        $perPage = request('limit', 10);
        $page = request('page', 1);
        $search = request('search', '');
        $posts = Posts::where('title', 'like', '%' . $search . '%')->paginate($perPage, ['*'], 'page', $page);
        $posts->load(['category:id,name']);
        $posts->load(['tag:id,name']);
        $posts->makeHidden(['category_id', 'tag_id']);
        
        return Inertia::render('Posts/index', [
            'data' => [
                'data' => $posts->items(),
                'pagination' => [
                    'current_page' => $posts->currentPage(),
                    'per_page' => $perPage, 
                    'total_pages' => $posts->lastPage(),
                    'total_data' => $posts->total(),
                ],
            ],
            'posts' => $posts->items(),
            'pagination' => [
                'current_page' => $posts->currentPage(),
                'per_page' => $perPage, 
                'total_pages' => $posts->lastPage(),
                'total_data' => $posts->total(),
            ],
        ]);
    }

    function show($slug)
    {
        $posts = Posts::where('slug', $slug)->first();
        $posts->load(['category:id,name']);
        $posts->load(['tag:id,name']);
        $posts->makeHidden(['category_id', 'tag_id']);
        return Inertia::render('Posts/detail', [
            'posts' => $posts,
        ]);
    }

    function create()
    {
        $category = Category::all();
        $tag = Tag::all();

        return Inertia::render('Posts/create', [
            'category' => $category,
            'tag' => $tag
        ]);
    }

    function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'body' => 'required',
            'category_id' => 'required',
            'tag_id' => 'required'
        ]);

        Posts::create([
            'slug' => \Str::slug($request->title),
            'title' => $request->title,
            'body' => $request->body,
            'category_id' => $request->category_id,
            'tag_id' => $request->tag_id,
        ]);

        return redirect('/posts');
    }

    function edit($slug)
    {
        $posts = Posts::where('slug', $slug)->first();
        $posts->load(['category:id,name']);
        $posts->load(['tag:id,name']);
        $posts->makeHidden(['category_id', 'tag_id']);
        $category = Category::when($posts->category, function ($query) use ($posts) {
            return $query->where('id', '!=', $posts->category->id);
        })->get();
        $tag = Tag::when($posts->tag, function ($query) use ($posts) {
            return $query->where('id', '!=', $posts->tag->id);
        })->get();

        return Inertia::render('Posts/edit', [
            'posts' => $posts,
            'category' =>  $category,
            'tag' => $tag
        ]);
    }

    function update(Request $request, $slug)
    {
        $request->validate([
            'title' => 'required',
            'body' => 'required',
            'category_id' => 'required',
            'tag_id' => 'required'
        ]);

        Posts::where('slug', $slug)->update([
            'slug' => \Str::slug($request->title),
            'title' => $request->title,
            'body' => $request->body,
            'category_id' => $request->category_id,
            'tag_id' => $request->tag_id,
        ]);

        return redirect('/posts');
    }

    function destroy($slug)
    {
        Posts::where('slug', $slug)->delete();
    }

    function search(Request $request)
    {
        if ($request->s) {
            $posts = Posts::where('title', 'like', '%' . $request->s . '%')->get(['id', 'title', 'category_id', 'tag_id']);
            $posts->load(['category:id,name']);
            $posts->load(['tag:id,name']);
        } else {
            $posts = [];
        }

        return Inertia::render('Posts/search', [
            'posts' => $posts,
            'highlight' => $request->s ?? '',
            'url' => '/posts/q/search',
            'loadTime' => microtime(true) - LARAVEL_START,
        ]);
    }
}