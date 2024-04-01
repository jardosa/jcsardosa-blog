import {z} from 'zod'

// Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);
export const createUserSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  handle: z.string().min(2),
  email: z.string().email().min(5),
  password: z.string().min(1).regex(passwordValidation,`Invalid password.
  \n - Min 8 characters,
  \n - One uppercase
  \n - One lowercase
  \n - One number
  \n - One special character`)
})

import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  firstName: string;

  @Field()
  handle: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
