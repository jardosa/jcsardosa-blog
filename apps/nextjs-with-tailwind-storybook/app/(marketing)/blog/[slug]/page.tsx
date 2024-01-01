import { GetPostDocument, GetPostQuery, GetPostQueryVariables } from '@nx-nextjs-tailwind-storybook/data-access'
import { getClient } from '@nx-nextjs-tailwind-storybook/feature'
import AvatarDetails from 'libs/ui/src/lib/AvatarDetails/AvatarDetails'
import { NextPage } from 'next'
import Image from 'next/image'
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

  const fullName = `${data.post?.author.firstName} ${data.post?.author.lastName}`
  return (
    <div className='space-y-5'>
      <div className='space-y-2 '>
        <div className='h-[400px] relative'>
          <Image className='w-auto' alt={data.post?.slug as string} src={data?.post?.coverPhotoURL as string} fill />
        </div>
        <h1 className='text-4xl'>{data.post?.title}</h1>
        <h3 className="text-2xl italic text-neutral-300">{data?.post?.tagline}</h3>
        <AvatarDetails src={data.post?.author.profilePhotoURL} primaryText={fullName} secondaryText={data.post?.author.email} />
      </div>
      <Markdown className='prose lg:prose-xl' remarkPlugins={[remarkGfm, remarkToc]}>{data?.post?.content}</Markdown>
    </div>
  )
}

export default BlogViewPage