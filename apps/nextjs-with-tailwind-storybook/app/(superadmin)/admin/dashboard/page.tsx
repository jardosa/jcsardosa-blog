import { BookOpenIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import React from 'react'

const DashboardPage = () => {

  const items = [
    {
      label: 'BlogPosts',
      href: '/admin/blog',
      icon: <BookOpenIcon className='w-full h-full' />
    }
  ]

  return (
    <div className='w-full h-screen grid place-items-center'>
      {items.map(({ href: link, icon, label: name }) => <Link key={link} className='text-center' href={link}>
        <div className='rounded-md w-28 h-28 outline outline-1 outline-neutral-100'>
          {icon}
        </div>
        <div className=''>
          {name}
        </div>
      </Link>)}
    </div>
  )
}

export default DashboardPage