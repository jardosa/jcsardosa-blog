import { ObjectType, Field } from '@nestjs/graphql';
import TimeStamps from '../../common/entities/timestamps.entity';
import Node from '../../common/entities/node.entity';

@ObjectType({ implements: [Node, TimeStamps] })
export default class Profile extends Node implements TimeStamps {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field()
  email: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field({ defaultValue: 'https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg' })
  profilePhotoURL?: string;
}
