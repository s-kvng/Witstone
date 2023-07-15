<?php

namespace Tests\Feature;

use App\Models\Post;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Inertia\Inertia;
use Inertia\Testing\Assert;
use Tests\TestCase;

class PostTest extends TestCase
{

    use RefreshDatabase;
    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function test_Posts_Index_Displays_Posts()
{
    // Create a user
    $user = User::factory()->create();
    
    // Create test posts associated with the user
    $posts = Post::factory()->count(5)->create(['user_id' => $user->id]);
    
    $this->actingAs($user);
    
    $response = $this->get(route('posts.index'));
    
    $response->assertStatus(200);
    
}

public function test_Post_Can_Be_Created()
{
    $user = User::factory()->create();
    $this->actingAs($user);

    $postData = [
        'message' => 'Test message',
    ];

    $response = $this->post(route('posts.store'), $postData);

    $response->assertRedirect(route('posts.index'));
    $this->assertDatabaseHas('posts', $postData);
}


public function test_Post_Can_Be_Updated()
{
    $user = User::factory()->create();
    $post = Post::factory()->create(['user_id' => $user->id]);
    $this->actingAs($user);

    $updatedData = [
        'message' => 'Updated message',
    ];

    $response = $this->put(route('posts.update', $post->id), $updatedData);

    $response->assertRedirect(route('posts.index'));
    $this->assertDatabaseHas('posts', $updatedData);
}

public function test_Post_CanBe_Deleted()
{
    $user = User::factory()->create();
    $post = Post::factory()->create(['user_id' => $user->id]);
    $this->actingAs($user);

    $response = $this->delete(route('posts.destroy', $post->id));

    $response->assertRedirect(route('posts.index'));
    $this->assertDatabaseMissing('posts', ['id' => $post->id]);
}


// public function testPostDetailDisplaysPostWithDetails()
// {
//     $user = User::factory()->create();
//     $post = Post::factory()->create(['user_id' => $user->id]);
//     $this->actingAs($user);

//     $response = $this->get(route('posts.show', $post->id));

//     $response->assertStatus(200);
//     $response->assertInertia(fn (Assert $page) =>
//         $page->component('Post/PostDetail')
//             ->where('post', function (Assert $postAssert) use ($post) {
//                 $postAssert->where('id', $post->id)
//                     ->where('message', $post->message)
//                     ->where('user', fn (Assert $user) =>
//                         $user->where('id', $post->$user->id)
//                             ->where('name', $post->$user->name)
//                     )
//                     ->where('likesCount', $post->getLikesCountAttribute())
//                     ->where('commentCount', $post->getCommentCountAttribute());
//             })
//     );
// }

    

}
