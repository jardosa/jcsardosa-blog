import { ArrowLeftOnRectangleIcon, HomeIcon, InformationCircleIcon } from "@heroicons/react/20/solid";
import { ReactElement, ReactNode } from "react";

const links: { name: string, link: string, icon: ReactElement | ReactNode }[] = [
  {
    name: 'Home',
    link: '/blog/',
    icon: <HomeIcon className='w-5 h-5' />
  },
  {
    name: 'About',
    link: '/about',
    icon: <InformationCircleIcon className='w-5 h-5' />
  },
]

export const bottomLinks: { name: string, link: string, icon: ReactElement | ReactNode }[] = [
  {
    name: 'Log Out',
    link: '/logout',
    icon: <ArrowLeftOnRectangleIcon className="w-5 h-5" />
  }
]

export default links