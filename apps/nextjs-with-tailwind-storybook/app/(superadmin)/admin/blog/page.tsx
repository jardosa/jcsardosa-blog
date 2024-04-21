'use client'

import { Button, Table, TableData } from '@mantine/core'
import { useFindPostsQuery } from '@nx-nextjs-tailwind-storybook/data-access'
import React from 'react'

import { useRouter } from 'next/navigation'
import { Loading } from '@nx-nextjs-tailwind-storybook/ui'
import Link from 'next/link'
import formatDate from 'apps/nextjs-with-tailwind-storybook/utils/formatDate'

const AdminPostsPage = () => {

  const { data, loading } = useFindPostsQuery({ variables: { searchInput: { limit: 10, offset: 0 } } })
  const router = useRouter()

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
        <Link href={`blog/${element._id}`} key={element._id}>{element.title}</Link>,
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
          onClick={() => router.push('/admin/blog/new')}
          variant='filled'>New Post</Button>
      </div>
      <Table highlightOnHover stickyHeader striped data={tableData} />
    </div>
  )
}

export default AdminPostsPage