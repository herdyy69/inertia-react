<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Posts>
 */
class PostsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'slug' => $this->faker->slug(),
            'bg_thumbnail' => $this->faker->imageUrl(),
            'thumbnail' => $this->faker->imageUrl(),
            'title' => $this->faker->sentence(),
            'excerpt' => $this->faker->paragraph(),
            'body' => $this->faker->paragraphs(3, true),
            'category_id' => $this->faker->numberBetween(1, 10),
            'tag_id' => $this->faker->numberBetween(1, 10),
            'user_id' => null,
            'published' => $this->faker->boolean(),
            'published_at' => $this->faker->dateTime(),
            'updated_at' => $this->faker->dateTime(),
            'created_at' => $this->faker->dateTime(),
        ];
    }
}
