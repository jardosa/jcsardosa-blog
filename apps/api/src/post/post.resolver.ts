import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PostService } from './post.service';

import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from './schema/post.schema';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gqlAuth.guard';
import { CurrentUser } from '../auth/decorators/currentUser.decorator';
import { User } from '../user/schema/user.schema';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) { }

  @Mutation(() => Post)
  @UseGuards(GqlAuthGuard)
  async createPost(
    @CurrentUser() user: User,
    @Args('createPostInput') createPostInput: CreatePostInput
  ) {
    return this.postService.create({ ...createPostInput, authorId: user._id });
  }

  @Query(() => [Post], { name: 'post' })
  findAll() {
    return this.postService.findAll();
  }

  @Query(() => Post, { name: 'post' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.postService.findOne(id);
  }

  @Mutation(() => Post)
  updatePost(@Args('updatePostInput') updatePostInput: UpdatePostInput) {
    return this.postService.update(updatePostInput.id, updatePostInput);
  }

  @Mutation(() => Post)
  removePost(@Args('id', { type: () => Int }) id: number) {
    return this.postService.remove(id);
  }
}
