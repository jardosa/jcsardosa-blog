'use client'

import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr'
import { FindPostsDocument, FindPostsQuery, PingDocument, PingQuery, Post, useFindPostsQuery } from '@nx-nextjs-tailwind-storybook/data-access'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

const BlogSnippet: FC<{ post: FindPostsQuery['posts'][number] }> = ({ post }) => {

  return <div className='outline outline-1 rounded-sm flex m-5 gap-3'>
    <div>
      <Image height={200} width={200} src={post.coverPhotoURL as string} alt={post.title} />
    </div>
    <div className='space-y-2 py-2'>
      <Link href={`/blog/${post.slug}`} className='text-2xl'>{post.title}</Link>
      <div className='text-lg text-neutral-400 italic'>{post.tagline}</div>
    </div>
    <div>

    </div>
  </div>
}

const BlogList: FC<{ posts: FindPostsQuery['posts'] }> = ({ posts }) => {
  return <div>
    {posts?.map((post) => <BlogSnippet post={post} />)}
  </div>
}

const BlogListPage = () => {
  const { data, loading } = useFindPostsQuery({ variables: { searchInput: { limit: 10, offset: 0 } } })


  if (loading || !data?.posts) return <div>Loading</div>
  console.log(data)
  return (
    <div className='text-2xl'>
      <BlogList posts={data?.posts} />

    </div>
  )
}

export default BlogListPage