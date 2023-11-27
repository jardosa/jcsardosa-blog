//@ts-ignore
import * as Types from '../types';

import { gql } from '@apollo/client';
export type AuthorFieldsFragment = { __typename?: 'User', firstName: string, lastName: string, email: string, createdAt: string, updatedAt: string };

export const AuthorFieldsFragmentDoc = gql`
    fragment authorFields on User {
  firstName
  lastName
  email
  createdAt
  updatedAt
}
    `;