//@ts-ignore
import * as Types from '../types';

import { gql } from '@apollo/client';
export type ProfileFieldsFragment = { __typename?: 'Profile', _id: string, firstName?: string | null, lastName?: string | null, email: string, createdAt: string, updatedAt: string, profilePhotoURL: string };

export const ProfileFieldsFragmentDoc = gql`
    fragment profileFields on Profile {
  _id
  firstName
  lastName
  email
  createdAt
  updatedAt
  profilePhotoURL
}
    `;