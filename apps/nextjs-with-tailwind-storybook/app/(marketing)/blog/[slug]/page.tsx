import { GetPostDocument, GetPostQuery, GetPostQueryHookResult, GetPostQueryResult, GetPostQueryVariables } from '@nx-nextjs-tailwind-storybook/data-access'
import { getClient } from '@nx-nextjs-tailwind-storybook/feature'
import { NextPage } from 'next'
import React from 'react'

const BlogViewPage: NextPage<{ params: { slug: string } }> = async ({ params }) => {
  const { data } = await getClient()
    .query<GetPostQuery, GetPostQueryVariables>(
      {
        query: GetPostDocument,
        variables: { slug: params.slug },
        fetchPolicy: 'network-only',
      })

  return (
    <div>BlogViewPage: {data?.post?.content}</div>
  )
}

export default BlogViewPage