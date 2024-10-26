import { Category, useFindPostsQuery } from '@nx-nextjs-tailwind-storybook/data-access'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Loading } from '../../components/Loading'
import { ComponentProps, useState } from 'react'
import { RecentPosts } from 'blog-ui'
import dayjs from 'dayjs'

export const Route = createFileRoute('/posts/')({
  component: () => <BlogListPage />
})


const BlogListPage = () => {
  const { data, loading } = useFindPostsQuery({ variables: { searchInput: { limit: 10, offset: 0, isPublished: true } } })
  const navigate = useNavigate()

  const [activeTab, setActiveTab] = useState<Category | 'ALL'>('ALL')
  if (loading || !data?.posts) return <Loading />

  const posts: ComponentProps<typeof RecentPosts>['posts'] = data?.posts.map((post) => ({
    date: post.publishedAt ? dayjs(post.publishedAt).format('MMMM DD.YY') : 'Unknown Publish Date',
    title: `${post.title}`,
    onClick: () => navigate({ to: '/posts/$postId', params: { postId: post.slug ?? '' } })
  }))

  return (
    <div className='text-2xl'>
      <RecentPosts header={'Posts'} activeTab={activeTab} setActiveTab={setActiveTab} posts={posts} />


    </div>
  )
}

export default BlogListPage