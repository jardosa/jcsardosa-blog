import { Category, useFindPostsQuery } from '@nx-nextjs-tailwind-storybook/data-access'
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { RecentPosts } from 'blog-ui'
import dayjs from 'dayjs'

import { ComponentProps, useState } from 'react'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {

  const [activeTab, setActiveTab] = useState<Category | 'ALL'>('ALL')

  const navigate = useNavigate()
  const { data } = useFindPostsQuery({
    variables: {
      searchInput: {
        ...activeTab !== 'ALL' && { category: activeTab },
        isPublished: true,
        limit: 10,
      }
    }
  })

  const posts: ComponentProps<typeof RecentPosts>['posts'] = data?.posts.map((post) => ({
    date: post.publishedAt ? dayjs(post.publishedAt).format('MMMM DD.YY') : 'Unknown Publish Date',
    title: `${post.title}`,
    onClick: () => navigate({ to: '/posts/$postId', params: { postId: post.slug ?? '' } })
  }))

  return (
    <RecentPosts activeTab={activeTab} setActiveTab={setActiveTab} posts={posts} />
  )
}
