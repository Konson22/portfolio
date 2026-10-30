<?php

use App\Http\Controllers\ContactController;
use App\Support\Portfolio;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', 'Home');
Route::inertia('/work', 'WorkIndex');
Route::get('/work/{slug}', fn (string $slug) => Inertia::render('Project', ['slug' => $slug]))
    ->whereIn('slug', Portfolio::workSlugs());
Route::inertia('/cv', 'Cv');
Route::inertia('/application/'.Portfolio::applicationSlug(), 'Application');

Route::post('/contact', ContactController::class);
