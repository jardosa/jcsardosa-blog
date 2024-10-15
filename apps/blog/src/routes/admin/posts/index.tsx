import { TableData, Button, Table } from '@mantine/core'
import { useFindPostsQuery } from '@nx-nextjs-tailwind-storybook/data-access'
import { Loading } from '@nx-nextjs-tailwind-storybook/ui'
import { Link, createFileRoute, useNavigate } from '@tanstack/react-router'
import formatDate from '../../../utils/formatDate'

export const Route = createFileRoute('/admin/posts/')({
  component: () => <AdminPostsPage />
})



const AdminPostsPage = () => {

  const { data, loading } = useFindPostsQuery({
    variables: {
      searchInput: {
        limit: 50,
        offset: 0,
        sortBy: 'createdAt', orderBy: 'desc'
      }
    }
  })
  const navigate = useNavigate()

  const tableData: TableData = {
    head: [
      "Title",
      "Status",
      "Tagline",
      "Created At",
      "Updated At",
      "Author",
      "Is Published"
    ],
    body: data?.posts.map((element) => {
      const fullName = element.author.firstName + ' ' + element.author.lastName
      return [
        <Link to={`${element._id}`} key={element._id}>{element.title}</Link>,
        element.status,
        element.tagline,
        formatDate(element.createdAt),
        formatDate(element.updatedAt),
        fullName,
        element.isPublished ? 'Yes' : 'No'
      ]
    })
  }

  if (loading || !data?.posts) return <Loading />
  return (
    <div>
      <div className='flex justify-end items-center'>
        <Button
          onClick={() => navigate({ to: '/admin/posts/new' })}
          variant='filled'>New Post</Button>
      </div>
      <Table highlightOnHover stickyHeader striped data={tableData} />
    </div>
  )
}