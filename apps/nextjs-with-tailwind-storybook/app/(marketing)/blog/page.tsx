'use client'

import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr'
import { FindPostsDocument, FindPostsQuery, PingDocument, PingQuery, useFindPostsQuery } from '@nx-nextjs-tailwind-storybook/data-access'
import React from 'react'

const BlogListPage = () => {
  const { data, loading } = useFindPostsQuery({ variables: { searchInput: { limit: 10, offset: 0 } } })

  console.log(data)
  return (
    <div className='text-2xl'>
      BlogListPage
    </div>
  )
}

export default BlogListPage