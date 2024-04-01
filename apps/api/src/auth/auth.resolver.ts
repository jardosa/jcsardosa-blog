
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import LoginPayload from './entities/loginPayload';


import { CurrentUser } from './decorators/currentUser.decorator';

import { GqlAuthGuard } from './guards/gqlAuth.guard';
import { UseGuards, UsePipes } from '@nestjs/common';
import { AuthenticationError } from '@nestjs/apollo';
import { CreateUserInput, createUserSchema } from '../user/dto/create-user.input';
import { User } from '../user/schema/user.schema';
import { UserService } from '../user/user.service';
import { ZodValidationPipe } from '../common/pipes/zodValidation.pipe';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) { }

  @Mutation(() => LoginPayload)
  @UsePipes(new ZodValidationPipe(createUserSchema))
  register(@Args('registerInput') registerInput: CreateUserInput) {
    return this.authService.register(registerInput);
  }

  @Mutation(() => LoginPayload)
  login(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<LoginPayload> {
    return this.authService.login(email, password);
  }

  @Query(() => User)
  @UseGuards(GqlAuthGuard)
  async whoAmI(@CurrentUser() user: User) {
    if (!user)
      throw new AuthenticationError(
        'User not found. Redirecting to login page',
      );
    return this.userService.findOne({ _id: user._id });
  }
}
