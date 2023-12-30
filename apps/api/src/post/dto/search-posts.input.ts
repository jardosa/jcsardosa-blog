import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class SearchPostsInput {
  @Field(() => ID, { nullable: true })
  userId?: string;

  @Field({ defaultValue: 10 })
  limit?: number;

  @Field({ defaultValue: 0 })
  offset?: number;
}
