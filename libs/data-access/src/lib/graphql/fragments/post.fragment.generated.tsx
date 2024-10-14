//@ts-ignore
import * as Types from '../types';

import { gql } from '@apollo/client';
import { AuthorFieldsFragmentDoc } from './author.fragment.generated';
export type PostFieldsFragment = { __typename?: 'Post', _id: string, title: string, content: string, tagline: string, createdAt: string, updatedAt: string, slug?: string | null, coverPhotoURL?: string | null, publishedAt?: string | null, isPublished?: boolean | null, status: Types.Status, category: Types.Category, author: { __typename?: 'User', firstName: string, lastName: string, email: string, createdAt: string, updatedAt: string, profilePhotoURL: string, role: Types.Role } };

export const PostFieldsFragmentDoc = gql`
    fragment postFields on Post {
  _id
  title
  content
  tagline
  createdAt
  updatedAt
  slug
  coverPhotoURL
  publishedAt
  isPublished
  status
  category
  author {
    ...authorFields
  }
  slug
}
    ${AuthorFieldsFragmentDoc}`;