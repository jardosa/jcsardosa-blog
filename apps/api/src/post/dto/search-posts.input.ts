import { Field, InputType, ID } from '@nestjs/graphql';
import { SearchCommonInput } from '../../common/dto/search-common.input';
import { Category, Post, Status } from '../schema/post.schema';

@InputType()
export class SearchPostsInput extends SearchCommonInput implements Partial<Post> {
  @Field(() => ID, { nullable: true })
  author?: string;

  @Field({ nullable: true })
  orderBy?: string;

  @Field({ nullable: true })
  _id?: string;

  @Field(() => Category, { nullable: true })
  category?: Category;

  @Field({ nullable: true })
  content?: string;

  @Field({ nullable: true })
  coverPhotoURL?: string;

  @Field({ nullable: true })
  publishedAt?: Date;

  @Field({ nullable: true })
  slug?: string;

  @Field(() => Status, { nullable: true })
  status?: Status;

  @Field({ nullable: true })
  tagline?: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  isPublished?: boolean;


}
