<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\LikedPostController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Foundation\Auth\EmailVerificationRequest;

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

//
Route::get('/channel', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('channel');


//
Route::get('/policy', function () {
    return Inertia::render('Policies');
})->middleware(['auth', 'verified'])->name('policy');


//posts route
Route::resource('posts', PostController::class)
    ->only(['index','create', 'store', 'destroy', 'show', 'update'])
    ->middleware(['auth', 'verified']);


    //likes routes
Route::post('/posts/{post}/like', [LikedPostController::class, 'toggle'])->name('posts.like');


//
Route::resource('comment', CommentController::class)
    ->only(['store', 'update', 'destroy'])
    ->middleware(['auth', 'verified']);

    //Email verification routes
    Route::get('/email/verify', function () {
        return view('auth.verify-email');
    })->middleware('auth')->name('verification.notice');
 
    Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
        $request->fulfill();
    
        return redirect('/posts');
    })->middleware(['auth', 'signed'])->name('verification.verify');

 
Route::post('/email/verification-notification', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();
 
    return back()->with('message', 'Verification link sent!');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');

    //
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('logs', '\Rap2hpoutre\LaravelLogViewer\LogViewerController@index')->middleware('web');


require __DIR__.'/auth.php';
