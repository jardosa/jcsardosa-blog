import { GetPostDocument, GetPostQuery, GetPostQueryVariables } from '@nx-nextjs-tailwind-storybook/data-access'
import { queryOptions } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { queryClient } from '../../../main'
import request from 'graphql-request'
import remarkGfm from 'remark-gfm'
import remarkToc from "remark-toc";
import AceEditor from "react-ace";
import Markdown from 'react-markdown'
import formatDate from '../../../utils/formatDate'


const postQueryOptions = (postId: string) => queryOptions({
  queryKey: ['posts'],
  queryFn: async () =>
    request<GetPostQuery, GetPostQueryVariables>(
      import.meta.env.VITE_EXTERNAL_GRAPHQL_URL,
      GetPostDocument,
      { _id: postId },
    ),
})

export const Route = createFileRoute('/admin/posts/$postId')({
  component: () => <AdminSinglePost />,
  loader: ({ params }) => queryClient.ensureQueryData(postQueryOptions(params.postId))
})


const AdminSinglePost = () => {

  const postData = Route.useLoaderData()


  const post = postData?.post

  return (
    <div className='space-y-5'>
      <div className='text-2xl font-semibold'>
        {post?.title}
      </div>

      <div className='text-lg font-semibold'>Details</div>

      <div className='space-y-5'>
        <div className='medium'>Title: {post?.title}</div>
        <div className='medium'>Category: {post?.category}</div>
        <div className='medium'>Date Created: {formatDate(post?.createdAt as string)}</div>
        <div className='medium'>Content</div>
        <div className='flex flex-wrap'>
          <AceEditor
            className='flex-1'
            defaultValue={post?.content}
            mode='markdown'
            theme='github'
            editorProps={{ $blockScrolling: true }}
          />
          <Markdown
            className='prose lg:prose-xl flex-1'
            remarkPlugins={[remarkGfm, remarkToc]}>{postData?.post?.content}</Markdown>
        </div>
      </div>
    </div>
  )
}

export default AdminSinglePost