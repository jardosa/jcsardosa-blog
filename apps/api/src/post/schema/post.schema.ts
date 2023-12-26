import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import TimeStamps from '../../common/entities/timestamps';
import Node from '../../common/entities/node.entity';
import { User } from '../../user/schema/user.schema';

export type PostDocument = HydratedDocument<Post & TimeStamps>;

@ObjectType({ isAbstract: true, implements: [Node, TimeStamps] })
@Schema({ timestamps: true })
export class Post extends Node {
  @Prop()
  @Field()
  title: string;

  @Prop()
  @Field({ nullable: true })
  slug?: string;

  @Prop()
  @Field()
  content: string;

  @Prop({ ref: User.name, type: Types.ObjectId })
  @Field(() => ID)
  author: string;

  @Prop()
  @Field()
  publishedAt: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post);
