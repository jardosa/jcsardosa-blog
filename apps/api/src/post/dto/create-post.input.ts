import { InputType, Field } from '@nestjs/graphql';
import { Category, Post } from '../schema/post.schema';

@InputType()
export class CreatePostInput implements Pick<Post, 'title' | 'content' | 'slug' | 'coverPhotoURL'> {
  @Field(() => String, { description: 'Title of post' })
  title: string;

  @Field(() => String, { description: 'Tagline of the post', nullable: true })
  tagline?: string;

  @Field(() => String, { description: 'Content of post' })
  content: string;

  @Field(() => Category, { description: 'Category of post' })
  category: Category;

  @Field(() => String, { description: 'Slug of the post. This will be used as a Human-readable ID' })
  slug: string;

  @Field(() => String, { description: 'Cover photo of the post', nullable: true })
  coverPhotoURL?: string;

  author: string;
}
