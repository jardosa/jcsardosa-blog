import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from './schema/post.schema';
import { Model, Types } from 'mongoose';
import { SearchPostsInput } from './dto/search-posts.input';
import slugify from 'slugify'

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) { }

  async create(createPostInput: CreatePostInput) {
    const createdpost = new this.postModel({
      ...createPostInput,
      author: new Types.ObjectId(createPostInput.author),
    });

    return (await createdpost.save()).toObject();
  }

  async findAll(searchPostInput: SearchPostsInput) {
    const posts = await this.postModel.find(searchPostInput).sort({
      _id: 'descending',
    })
      .limit(searchPostInput.limit)
      .skip(searchPostInput.offset)
    return posts
  }

  async findOne(id: string) {
    const post = await this.postModel.findById(id)
    return post;
  }

  async update(
    _id: string,
    updatePostInput: UpdatePostInput,
  ): Promise<PostDocument> {
    const updatedPost = await this.postModel.findByIdAndUpdate(
      _id,
      {
        ...updatePostInput,
        ...updatePostInput.title && { content: slugify(updatePostInput.title) },
      },
      { new: true },
    );

    return updatedPost;
  }

  async remove(_id: string): Promise<PostDocument> {
    const removedPost = await this.postModel.findByIdAndDelete(_id);
    return removedPost;
  }
}
