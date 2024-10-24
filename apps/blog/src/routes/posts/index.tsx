import { Image } from '@mantine/core'
import { Post, useFindPostsQuery } from '@nx-nextjs-tailwind-storybook/data-access'
import { Link, createFileRoute } from '@tanstack/react-router'
import { Loading } from '../../components/Loading'
import { FC } from 'react'

export const Route = createFileRoute('/posts/')({
  component: () => <BlogListPage />
})

const BlogSnippet: FC<{ post: Post }> = ({ post }) => {

  return <div className='outline outline-1 outline-neutral-200 rounded-sm flex m-5 gap-3'>
    <div>
      <Image h={200} w={200} src={post.coverPhotoURL as string} alt={post.title} />
    </div>
    <div className='space-y-2 py-2'>
      <Link to={`/posts/${post.slug}`} className='text-2xl'>{post.title}</Link>
      <div className='text-lg text-neutral-400 italic'>{post.tagline}</div>
    </div>
    <div>

    </div>
  </div>
}

const BlogList: FC<{ posts: Post[] }> = ({ posts }) => {
  return <div>
    {posts?.map((post: Post) => <BlogSnippet post={post} />)}
  </div>
}

const BlogListPage = () => {
  const { data, loading } = useFindPostsQuery({ variables: { searchInput: { limit: 10, offset: 0, isPublished: true } } })


  if (loading || !data?.posts) return <Loading />

  return (
    <div className='text-2xl'>
      <BlogList posts={data?.posts as Post[]} />

    </div>
  )
}

export default BlogListPage