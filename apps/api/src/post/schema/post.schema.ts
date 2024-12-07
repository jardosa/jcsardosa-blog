import { Field, ID, InputType, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import TimeStamps from '../../common/entities/timestamps.entity';
import Node from '../../common/entities/node.entity';
import { User } from '../../user/schema/user.schema';

export type PostDocument = HydratedDocument<Post & TimeStamps>;

export enum Status {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  ARCHIVED = 'ARCHIVED',
}

export enum Category {
  OUTDOOR_AND_TRAVEL = 'OUTDOOR_AND_TRAVEL',
  AUTOMOTIVE = 'AUTOMOTIVE',
  TECH = 'TECH',
  SOFTWARE_DEVELOPMENT = 'SOFTWARE_DEVELOPMENT',
  LIFE_UPDATE = 'LIFE_UPDATE'
}

registerEnumType(Status, {
  name: "Status",
  description: "Status of the post",
  valuesMap: {
    DRAFT: {
      description: "Post has not been published"
    },
    PUBLISHED: {
      description: "Post has been published",
    },
    ARCHIVED: {
      description: "Post has been archived but not deleted."
    }
  },
});

registerEnumType(Category, {
  name: "Category",
  description: "Category of the post",
});

@ObjectType({ isAbstract: true, implements: [Node, TimeStamps] })
  @InputType({ isAbstract: true })
@Schema({ timestamps: true })
export class Post extends Node {
  @Prop()
  @Field()
  title: string;

  @Prop()
  @Field({ nullable: true })
  slug?: string;

  @Prop()
  @Field({ nullable: true, defaultValue: 'https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg' })
  coverPhotoURL?: string

  @Prop()
  @Field()
  content: string;

  @Prop({ ref: User.name, type: Types.ObjectId })
  @Field(() => ID)
  author: string;

  @Prop()
  @Field(() => Status)
  status: Status

  @Prop()
  @Field({ nullable: true })
  publishedAt?: Date;

  @Prop()
  @Field({ nullable: true })
  isPublished?: boolean

  @Prop()
  @Field({ defaultValue: "" })
  tagline: string;

  @Prop()
  @Field(() => Category, { defaultValue: Category.LIFE_UPDATE })
  category: Category
}

export const PostSchema = SchemaFactory.createForClass(Post);
