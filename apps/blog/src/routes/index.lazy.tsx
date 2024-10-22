import { Category, useFindPostsQuery } from '@nx-nextjs-tailwind-storybook/data-access'
import { createLazyFileRoute } from '@tanstack/react-router'
import { RecentPosts } from 'blog-ui'
import dayjs from 'dayjs'

import { ComponentProps, useState } from 'react'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {

  const [activeTab, setActiveTab] = useState<Category | 'ALL'>('ALL')

  const { data } = useFindPostsQuery({
    variables: {
      searchInput: {
        ...activeTab !== 'ALL' && { category: activeTab }
      }
    }
  })

  const posts: ComponentProps<typeof RecentPosts>['posts'] = data?.posts.map((post) => ({
    date: post.publishedAt ? dayjs(post.publishedAt).format('MMMM DD.YY') : 'Unknown Publish Date',
    title: `${post.title}`,
  }))

  return (
    <RecentPosts activeTab={activeTab} setActiveTab={setActiveTab} posts={posts} />
  )
}
