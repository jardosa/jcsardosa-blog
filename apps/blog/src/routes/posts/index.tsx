import { TableData, Button, Table } from '@mantine/core'
import { useFindPostsQuery } from '@nx-nextjs-tailwind-storybook/data-access'
import { Link, createFileRoute, useNavigate } from '@tanstack/react-router'
import { Loading } from '../../components/Loading'
import formatDate from '../../utils/formatDate'

export const Route = createFileRoute('/posts/')({
  component: () => <AdminPostsPage />
})



const AdminPostsPage = () => {

  const { data, loading } = useFindPostsQuery({ variables: { searchInput: { limit: 10, offset: 0 } } })
  console.log({ loading, data })
  const navigate = useNavigate()

  const tableData: TableData = {
    head: [
      "Title",
      "Status",
      "Tagline",
      "Created At",
      "Updated At",
      "Author",
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
      ]
    })
  }

  if (loading || !data?.posts) return <Loading />
  return (
    <div>
      <div className='flex justify-end items-center'>
        <Button
          onClick={() => navigate({ to: '/posts/new' })}
          variant='filled'>New Post</Button>
      </div>
      <Table highlightOnHover stickyHeader striped data={tableData} />
    </div>
  )
}