import { ArrowLeftOnRectangleIcon, BookOpenIcon, HomeIcon } from "@heroicons/react/20/solid";
import { ReactElement, ReactNode } from "react";

const links: { name: string, link: string, icon: ReactElement | ReactNode }[] = [
  {
    name: 'Home',
    link: '/admin/dashboard',
    icon: <HomeIcon className='w-5 h-5' />
  },
  {
    name: 'BlogPosts',
    link: '/admin/blog',
    icon: <BookOpenIcon className='w-5 h-5' />
  },

]

export const bottomLinks: { name: string, link: string, icon: ReactElement | ReactNode }[] = [
  {
    name: 'Log Out',
    link: '/admin/logout',
    icon: <ArrowLeftOnRectangleIcon className="w-5 h-5" />
  }
]

export default links