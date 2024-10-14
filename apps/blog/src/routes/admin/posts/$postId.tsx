import { useGetPostQuery } from '@nx-nextjs-tailwind-storybook/data-access'
import { Link, createFileRoute } from '@tanstack/react-router'
import remarkGfm from 'remark-gfm'
import remarkToc from "remark-toc";
import Markdown from 'react-markdown'
import formatDate from '../../../utils/formatDate'
import { Button } from '@mantine/core';


export const Route = createFileRoute('/admin/posts/$postId')({
  component: () => <AdminSinglePost />,
})


const AdminSinglePost = () => {
  const params = Route.useParams()

  const { data: postData } = useGetPostQuery({ variables: { _id: params.postId } })


  const post = postData?.post

  return (
    <div className='space-y-5'>
      <div className='text-2xl font-semibold'>
        {post?.title}
      </div>

      <div className='flex gap-2'>
        <Link to='/admin/posts/$postId/edit' params={{ postId: post?._id as string }}
          className='hover:text-slate-500 font-semibold'><Button>Edit</Button></Link>
        <Link to='/posts/$postId' params={{ postId: post?.slug as string }}
          className='hover:text-slate-500 font-semibold'><Button color='green'>View In Website</Button></Link>
      </div>
      <div className='text-lg font-semibold'>Details</div>

      <div className='space-y-5'>
        <div className='medium'>Title: {post?.title}</div>
        <div className='medium'>Category: {post?.category}</div>
        <div className='medium'>Date Created: {formatDate(post?.createdAt as string)}</div>
        <div className='medium'>Content</div>
        <div className='flex flex-wrap'>
          <Markdown
            className='prose lg:prose-xl flex-1'
            remarkPlugins={[remarkGfm, remarkToc]}>{postData?.post?.content}</Markdown>
        </div>
      </div>
    </div>
  )
}

export default AdminSinglePost