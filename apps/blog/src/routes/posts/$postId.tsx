import { Category, GetPostDocument, GetPostQuery, GetPostQueryVariables } from '@nx-nextjs-tailwind-storybook/data-access'
import { queryOptions } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import request from 'graphql-request'
import { queryClient } from '../../main'
import { Avatar, Image } from '@mantine/core'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkToc from "remark-toc";
import dayjs from 'dayjs'
import { PostDetail } from 'blog-ui'

const postQueryOptions = (postId: string) => {
  return queryOptions({
    queryKey: ['posts', postId],
    queryFn: async () =>
      request<GetPostQuery, GetPostQueryVariables>(
        import.meta.env.VITE_EXTERNAL_GRAPHQL_URL,
        GetPostDocument,
        { slug: postId },
      ),
  })
}

export const Route = createFileRoute('/posts/$postId')({
  component: () => <Post />,
  loader: ({ params }) => queryClient.ensureQueryData(postQueryOptions(params.postId)),
})

export const Post = () => {
  const postData = Route.useLoaderData()

  console.log({ postData })
  const fullName = `${postData.post?.author.firstName} ${postData.post?.author.lastName}`
  const datePublished = dayjs(postData.post?.publishedAt ?? undefined).format('MM/DD/YYYY')

  return <PostDetail
    author={fullName}
    category={postData.post?.category as Category}
    content={postData.post?.content ?? ''}
    date={postData.post?.publishedAt ?? ''}
    coverPhoto={postData.post?.coverPhotoURL ?? ''}
    title={postData.post?.title ?? ''}
  />

  return <div className='space-y-5 flex items-center justify-center'>
    <div className='max-w-[700px]'>
      <div className='space-y-2 '>
        <div className='max-h-[400px] relative'>
          <Image h={400} className='w-auto' alt={postData.post?.slug as string} src={postData?.post?.coverPhotoURL as string} />
        </div>
        <h1 className='text-4xl'>{postData.post?.title}</h1>
        <h3 className="text-2xl italic text-neutral-300">{postData?.post?.tagline}</h3>
        <div className='flex gap-2 items-center'>
          <Avatar src={postData.post?.author.profilePhotoURL} alt={fullName} />
          <div className=''>
            <div>
              By: {fullName}
            </div>
            <div className='text-sm text-slate-400'>
              Date Posted: {datePublished}
            </div>
          </div>
        </div>
      </div>
      <br />
      <Markdown className='prose lg:prose-xl' remarkPlugins={[remarkGfm, remarkToc]}>{postData?.post?.content}</Markdown>
    </div>
  </div>
}


