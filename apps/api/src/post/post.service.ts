import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument, Status } from './schema/post.schema';
import { Model, SortOrder, Types } from 'mongoose';
import { SearchPostsInput } from './dto/search-posts.input';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {
  }

  async checkSlugValidity(slug: string) {
    const existingSlugRecord = await this.postModel.findOne({ slug });
    if (existingSlugRecord) {
      throw new UnprocessableEntityException('Slug already taken');
    }
  }

  async create(createPostInput: CreatePostInput) {

    await this.checkSlugValidity(createPostInput.slug);

    const createdpost = new this.postModel({
      ...createPostInput,
      author: new Types.ObjectId(createPostInput.author),
      status: Status.DRAFT
    });

    return (await createdpost.save()).toObject();
  }

  async findAll(searchPostInput: SearchPostsInput) {
    const {
      sortBy,
      orderBy,
      limit,
      offset,
      ...query
    } = searchPostInput;

    return this.postModel.find({
      ...query
    }).sort({
      [sortBy]: orderBy as SortOrder
    })
      .limit(limit)
      .skip(offset);
  }

  async findOne(id: string): Promise<Post | null> {
    const post = await this.postModel.findById(id) || null;
    return post;
  }

  async findOneBySlug(slug: string): Promise<Post | null> {
    const post = await this.postModel.findOne({ slug }) || null;
    return post;
  }

  async update(
    _id: string,
    updatePostInput: UpdatePostInput
  ): Promise<PostDocument> {
    if (updatePostInput.slug) {
      await this.checkSlugValidity(updatePostInput.slug);
    }
    const updatedPost = await this.postModel.findByIdAndUpdate(
      _id,
      updatePostInput,
      { new: true }
    );

    return updatedPost;
  }

  async remove(_id: string): Promise<PostDocument> {
    const removedPost = await this.postModel.findByIdAndDelete(_id);
    return removedPost;
  }
}
