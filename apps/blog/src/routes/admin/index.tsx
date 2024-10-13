import { BookOpenIcon } from '@heroicons/react/20/solid'
import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/')({
  component: () => <DashboardPage />
})


const DashboardPage = () => {

  const items = [
    {
      label: 'BlogPosts',
      href: '/admin/posts',
      icon: <BookOpenIcon className='w-full h-full' />
    }
  ]

  return (
    <div className='w-full h-screen grid place-items-center'>
      {items.map(({ href: link, icon, label: name }) => <Link key={link} className='text-center' to={link}>
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