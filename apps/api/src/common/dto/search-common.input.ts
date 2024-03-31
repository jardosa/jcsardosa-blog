import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SearchCommonInput {
  @Field({ defaultValue: 10, nullable: true })
  limit?: number;

  @Field({ defaultValue: 0, nullable: true })
  offset?: number;

  @Field({ defaultValue: 'desc', nullable: true })
  sortBy?: string;
}
