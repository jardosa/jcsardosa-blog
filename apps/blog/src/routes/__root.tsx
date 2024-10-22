import { HomeIcon, InformationCircleIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/20/solid'
import { NavLink } from '@mantine/core'
import { createRootRoute, FileBaseRouteOptions, Link, Outlet, ReactNode, redirect, useLocation, useNavigate } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import { ReactElement, useMemo } from 'react'
// import MainLayout from '../components/layouts/MainLayout/MainLayout'
import { compact } from 'lodash'
import { WhoAmIQuery, WhoAmIQueryVariables, WhoAmIDocument, Role, useWhoAmIQuery } from '@nx-nextjs-tailwind-storybook/data-access'
import { getCookie } from 'cookies-next'
import request from 'graphql-request'
import { MainLayout } from 'blog-ui'

const beforeLoad: FileBaseRouteOptions['beforeLoad'] = async ({ location, }) => {
  const authToken = getCookie('authToken')

  if (authToken) {
    const res = await request<WhoAmIQuery, WhoAmIQueryVariables>(
      {
        document: WhoAmIDocument,
        url: import.meta.env.VITE_EXTERNAL_GRAPHQL_URL,
        requestHeaders: {
          authorization: `Bearer ${authToken}`
        }
      }
    )

    if (!res.whoAmI) {
      // redirects to admin if a user tries access without proper auth token
      if (location.pathname.includes('admin')) {
        throw redirect({ to: '/login' })
      } else {
        // redirects to regular login if a user tries access without proper auth token
        throw redirect({ to: '/login' })
      }
    } else {
      // profile exists but user is not admin, redirect to regular user home page
      if (location.pathname.includes('admin') && res.whoAmI.role !== Role.Admin) {
        throw redirect({ to: '/' })
      } else {
        return { profile: res.whoAmI }
      }
    }
  } else {
    if (location.pathname.includes('login')) return { profile: {} }

    // redirects to admin if a user tries access without auth token
    if (location.pathname.includes('admin')) {
      throw redirect({ to: '/login' })
    }
  }
}


export const Route = createRootRoute({
  component: () => <Root />,
  beforeLoad,
  gcTime: 0,
})


const Root = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const shellDisabled = useMemo(() => {
    if (location.href.startsWith('/login')) return true
    if (location.href.startsWith('/logout')) return true
    return false
  }, [location.href])

  const { data } = useWhoAmIQuery()

  const isAdmin = data?.whoAmI?.role === Role.Admin

  const links: { name: string, link: string, icon: ReactElement | ReactNode }[] = [
    {
      name: 'Home',
      link: isAdmin ? '/admin/' : '/posts/',
      icon: <HomeIcon className='w-5 h-5' />
    },
    {
      name: 'About',
      link: '/about',
      icon: <InformationCircleIcon className='w-5 h-5' />
    },
  ]
  const bottomLinks: { name: string, link: string, icon: ReactElement | ReactNode }[] = compact([
    isAdmin && {
      name: 'Log Out',
      link: '/logout',
      icon: <ArrowLeftOnRectangleIcon className="w-5 h-5" />
    }
  ])

  const navItems = links.map(({ name, link, icon }) => {
    return <NavLink key={link} component={Link} to={link} label={name} leftSection={icon} />
  })
  const bottomNavItems = bottomLinks.map(({ name, link, icon }) => {
    return <NavLink key={link} component={Link} to={link} label={name} leftSection={icon} />
  })

  return <MainLayout
    isAdmin={isAdmin}
    disabled={shellDisabled}
    onClickAdminLogo={() => navigate({ to: '/admin' })}
    navItems={navItems}
    bottomNavItems={bottomNavItems}
    {...{ logo: 'https://i.pinimg.com/originals/82/c6/5b/82c65b9bb0a75026fc4c82a438b4cc9b.jpg', }}
  >
    <Outlet />
    <TanStackRouterDevtools />
  </MainLayout>
}


