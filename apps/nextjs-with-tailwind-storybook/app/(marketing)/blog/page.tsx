'use client'


import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr'
import { PingDocument, PingQuery } from '@nx-nextjs-tailwind-storybook/data-access'
import React from 'react'

const BlogListPage = () => {
  const { data, loading } = useQuery<PingQuery>(PingDocument)
  return (
    <div className='text-2xl'>BlogListPage</div>
  )
}

export default BlogListPage