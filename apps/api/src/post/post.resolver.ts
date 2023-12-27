import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent, ID } from '@nestjs/graphql';
import { PostService } from './post.service';

import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from './schema/post.schema';
import { UnprocessableEntityException, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gqlAuth.guard';
import { CurrentUser } from '../auth/decorators/currentUser.decorator';
import { User } from '../user/schema/user.schema';
import { UserService } from '../user/user.service';
import { SearchPostsInput } from './dto/search-posts.input';

@Resolver(() => Post)
export class PostResolver {
  constructor(
    private readonly postService: PostService,
    private readonly userService: UserService
  ) { }

  @Mutation(() => Post)
  @UseGuards(GqlAuthGuard)
  async createPost(
    @CurrentUser() user: User,
    @Args('createPostInput') createPostInput: CreatePostInput
  ) {
    return this.postService.create({ ...createPostInput, author: user._id });
  }

  @Query(() => [Post], { name: 'posts' })
  findAll(@Args('searchInput') searchInput: SearchPostsInput) {
    return this.postService.findAll(searchInput);
  }

  @Query(() => Post, { name: 'post', nullable: true })
  findOne(
    @Args('_id', { type: () => ID, nullable: true }) _id?: string,
    @Args('slug', { type: () => String, nullable: true }) slug?: string,
  ) {
    if (!_id && !slug) throw new UnprocessableEntityException("must provide either _id or slug!")
    if (_id) return this.postService.findOne(_id);
    return this.postService.findOneBySlug(slug)
  }

  @Mutation(() => Post)
  updatePost(@Args('updatePostInput') updatePostInput: UpdatePostInput) {
    return this.postService.update(updatePostInput.id, updatePostInput);
  }

  @Mutation(() => Post, { description: "Deletes a post" })
  removePost(@Args('_id', { type: () => ID }) _id: string) {
    return this.postService.remove(_id);
  }

  @ResolveField('author', () => User)
  async getAuthor(
    @Parent() post: Post,

  ): Promise<User> {
    const { author } = post;
    const record = await this.userService.findOne({ _id: author })

    return record
  }
}
