import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import TimeStamps from '../../common/entities/timestamps';
import Node from '../../common/entities/node.entity';

export type UserDocument = HydratedDocument<User & TimeStamps>;


export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

registerEnumType(Role, {
  name: "Role",
  description: "User Role",
});
@ObjectType({ isAbstract: true, implements: [Node, TimeStamps] })
@Schema({ timestamps: true })
export class User extends Node {
  @Prop()
  @Field()
  firstName: string;
  
  @Prop()
  @Field()
  lastName: string;

  @Prop()
  @Field()
  handle: string;

  @Prop()
  @Field()
  email: string;

  @Prop()
  @Field(() => Role)
  role: Role

  @Prop()
  password: string;

  @Prop()
  @Field({ defaultValue: 'https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg' })
  profilePhotoURL?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
