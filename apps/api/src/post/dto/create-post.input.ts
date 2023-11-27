import { InputType, Field } from '@nestjs/graphql';
import { Post } from '../schema/post.schema';

@InputType()
export class CreatePostInput implements Pick<Post, 'title' | 'content'> {
  @Field(() => String, { description: 'Title of post' })
  title: string;

  @Field(() => String, { description: 'Content of post' })
  content: string;

  author: string;
}
