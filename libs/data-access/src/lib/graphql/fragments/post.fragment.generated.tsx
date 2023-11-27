//@ts-ignore
import * as Types from '../types';

import { gql } from '@apollo/client';
import { AuthorFieldsFragmentDoc } from './author.fragment.generated';
export type PostFieldsFragment = { __typename?: 'Post', title: string, content: string, createdAt: string, updatedAt: string, author: { __typename?: 'User', firstName: string, lastName: string, email: string, createdAt: string, updatedAt: string } };

export const PostFieldsFragmentDoc = gql`
    fragment postFields on Post {
  title
  content
  createdAt
  updatedAt
  author {
    ...authorFields
  }
}
    ${AuthorFieldsFragmentDoc}`;