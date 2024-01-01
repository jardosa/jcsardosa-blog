//@ts-ignore
import * as Types from '../types';

import { gql } from '@apollo/client';
import { PostFieldsFragmentDoc } from '../fragments/post.fragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPostQueryVariables = Types.Exact<{
  _id?: Types.InputMaybe<Types.Scalars['ID']['input']>;
  slug?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type GetPostQuery = { __typename?: 'Query', post?: { __typename?: 'Post', _id: string, title: string, content: string, tagline: string, createdAt: string, updatedAt: string, slug?: string | null, coverPhotoURL?: string | null, publishedAt?: string | null, status: Types.Status, category: Types.Category, author: { __typename?: 'User', firstName: string, lastName: string, email: string, createdAt: string, updatedAt: string, profilePhotoURL: string } } | null };

export type FindPostsQueryVariables = Types.Exact<{
  searchInput: Types.SearchPostsInput;
}>;


export type FindPostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', _id: string, title: string, content: string, tagline: string, createdAt: string, updatedAt: string, slug?: string | null, coverPhotoURL?: string | null, publishedAt?: string | null, status: Types.Status, category: Types.Category, author: { __typename?: 'User', firstName: string, lastName: string, email: string, createdAt: string, updatedAt: string, profilePhotoURL: string } }> };


export const GetPostDocument = gql`
    query GetPost($_id: ID, $slug: String) {
  post(_id: $_id, slug: $slug) {
    ...postFields
  }
}
    ${PostFieldsFragmentDoc}`;

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      _id: // value for '_id'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetPostQuery(baseOptions?: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
      }
export function useGetPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
        }
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;
export const FindPostsDocument = gql`
    query FindPosts($searchInput: SearchPostsInput!) {
  posts(searchInput: $searchInput) {
    ...postFields
  }
}
    ${PostFieldsFragmentDoc}`;

/**
 * __useFindPostsQuery__
 *
 * To run a query within a React component, call `useFindPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindPostsQuery({
 *   variables: {
 *      searchInput: // value for 'searchInput'
 *   },
 * });
 */
export function useFindPostsQuery(baseOptions: Apollo.QueryHookOptions<FindPostsQuery, FindPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindPostsQuery, FindPostsQueryVariables>(FindPostsDocument, options);
      }
export function useFindPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindPostsQuery, FindPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindPostsQuery, FindPostsQueryVariables>(FindPostsDocument, options);
        }
export type FindPostsQueryHookResult = ReturnType<typeof useFindPostsQuery>;
export type FindPostsLazyQueryHookResult = ReturnType<typeof useFindPostsLazyQuery>;
export type FindPostsQueryResult = Apollo.QueryResult<FindPostsQuery, FindPostsQueryVariables>;