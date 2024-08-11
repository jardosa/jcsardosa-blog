import { GetPostDocument, GetPostQuery, GetPostQueryVariables } from '@nx-nextjs-tailwind-storybook/data-access'
import { queryOptions } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import request from 'graphql-request'
import { queryClient } from '../../main'


const postQueryOptions = (postId: string) => queryOptions({
  queryKey: ['posts'],
  queryFn: async () =>
    request<GetPostQuery, GetPostQueryVariables>(
      'http://localhost:4000/graphql',
      GetPostDocument,
      // variables are type-checked too!
      { _id: postId },
    ),
})

export const Route = createFileRoute('/posts/$postId')({
  component: () => <Post />,
  loader: ({ params }) => queryClient.ensureQueryData(postQueryOptions(params.postId))
})

const Post = () => {
  const postData = Route.useLoaderData()


  const fullName = `${postData.post?.author.firstName} ${postData.post?.author.lastName}`

  return <div>
    {fullName}
  </div>
}

