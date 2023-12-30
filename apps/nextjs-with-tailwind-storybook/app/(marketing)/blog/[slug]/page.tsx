import { GetPostDocument, GetPostQuery, GetPostQueryHookResult, GetPostQueryResult, GetPostQueryVariables } from '@nx-nextjs-tailwind-storybook/data-access'
import { getClient } from '@nx-nextjs-tailwind-storybook/feature'
import { NextPage } from 'next'
import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkToc from "remark-toc";

const BlogViewPage: NextPage<{ params: { slug: string } }> = async ({ params }) => {
  const { data } = await getClient()
    .query<GetPostQuery, GetPostQueryVariables>(
      {
        query: GetPostDocument,
        variables: { slug: params.slug },
      })

  return (
    <Markdown className='prose lg:prose-xl' remarkPlugins={[remarkGfm, remarkToc]}>{data?.post?.content}</Markdown>
  )
}

export default BlogViewPage