import { HomeIcon, InformationCircleIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/20/solid'
import { NavLink } from '@mantine/core'
import { createRootRoute, Link, Outlet, ReactNode } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import { ReactElement } from 'react'
import MainLayout from '../components/layouts/MainLayout/MainLayout'

export const Route = createRootRoute({
  component: () => <Root />,
})


const Root = () => {

  const navItems = links.map(({ name, link, icon }) => {
    return <NavLink key={link} component={Link} to={link} label={name} leftSection={icon} />
  })
  const bottomNavItems = bottomLinks.map(({ name, link, icon }) => {
    return <NavLink key={link} component={Link} to={link} label={name} leftSection={icon} />
  })


  return <MainLayout
    navItems={navItems}
    bottomNavItems={bottomNavItems}
    {...{ logo: 'https://i.pinimg.com/originals/82/c6/5b/82c65b9bb0a75026fc4c82a438b4cc9b.jpg', }}
  >
    <Outlet />
    <TanStackRouterDevtools />
  </MainLayout>
}


const links: { name: string, link: string, icon: ReactElement | ReactNode }[] = [
  {
    name: 'Home',
    link: '/posts/',
    icon: <HomeIcon className='w-5 h-5' />
  },
  {
    name: 'About',
    link: '/about',
    icon: <InformationCircleIcon className='w-5 h-5' />
  },
]
const bottomLinks: { name: string, link: string, icon: ReactElement | ReactNode }[] = [
  {
    name: 'Log Out',
    link: '/logout',
    icon: <ArrowLeftOnRectangleIcon className="w-5 h-5" />
  }
]