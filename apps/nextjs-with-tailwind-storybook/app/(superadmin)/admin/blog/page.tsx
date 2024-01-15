'use client'

import { Table, TableData } from '@mantine/core'
import { useFindPostsQuery } from '@nx-nextjs-tailwind-storybook/data-access'
import React from 'react'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import Loading from 'libs/ui/src/lib/Loading/Loading'

dayjs.extend(LocalizedFormat)

const formatData = (date: Date | string) => {
  return dayjs(date).format('LLL')
}

const AdminPostsPage = () => {

  const { data, loading } = useFindPostsQuery({ variables: { searchInput: { limit: 10, offset: 0 } } })


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
        element.title,
        element.status,
        element.tagline,
        formatData(element.createdAt),
        formatData(element.updatedAt),
        fullName,
      ]
    })
  }

  if (loading || !data?.posts) return <Loading />
  return (
    <Table highlightOnHover stickyHeader striped data={tableData} />
  )
}

export default AdminPostsPage