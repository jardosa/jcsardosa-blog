"use client"

import { FC, ReactNode, useState } from "react";
import Button from "../Button/Button";
import { useRouter } from 'next/navigation'
import { IoClose, IoMenu } from "react-icons/io5";
import Link from "next/link";
import { cn } from "../../utils/tailwindCn";


export interface MainMenuProps {
  logo?: string
  leftSideItems: {
    label: string
    href?: string
    icon?: ReactNode
    subItems?: Pick<MainMenuProps['leftSideItems'][0], 'subItems'>
  }[],
  rightSideItems: {
    label: string
    href?: string
    icon?: ReactNode
    subItems?: Pick<MainMenuProps['rightSideItems'][0], 'subItems'>
  }[]
}

const MainMenu: FC<MainMenuProps> = ({ logo, leftSideItems, rightSideItems }) => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const openMenu = () => {
    setOpen(true)
  }
  const closeMenu = () => {
    setOpen(false)
  }


  const linkMapper = (items: typeof leftSideItems) => {
    return <div className="text-sm flex gap-2 items-center">{items?.map(({ label, href }) => <Button
      category={'tertiary'}
      label={label}
      onClick={() => {
        router.push(href ?? '')
      }}
    />)}</div>
  }

  return (
    <div tabIndex={0} onBlur={() => {
      closeMenu()
    }} onKeyDown={(event) => {
      if (event.code === 'Escape') {
        closeMenu()
      }
    }}
      className="w-full sticky z-50 top-0 left-0 h-12 bg-ui-orange-200 px-5 py-2 flex items-center gap-2">
      <IoMenu onClick={openMenu} role="button" className="w-5 h-5 hover:text-white block sm:hidden" />
      <div className={cn(
        "w-full",
        'ease-in',
        'duration-100',
        open && 'max-w-[280px] opacity-100',
        !open && 'max-w-0 opacity-0',
        "bg-white",
        "shadow-lg",
        "fixed",
        "top-0",
        "left-0",
        "h-screen",
        "space-y-2",
        "py-2",
        "flex",
        "flex-col",
      )}>
        <div className="flex justify-end px-2">
          <IoClose onClick={closeMenu} title="Close" role="button" className="w-5 h-5 hover:text-ui-red-400 transition" />
        </div>
        {leftSideItems?.map(({ label, href }) => {
          return <Link className="w-full py-2 px-2 hover:bg-ui-orange-200 hover:text-white transition" href={href ?? "#"}>{label}</Link>
        })}
        {rightSideItems?.map(({ label, href }) => {
          return <Link className="w-full py-2 px-2 hover:bg-ui-orange-200 hover:text-white transition" href={href ?? "#"}>{label}</Link>
        })}
      </div>
      <img className="w-10 h-10" src={logo} />
      <div className="justify-between items-center flex-1 md:flex hidden">
        {linkMapper(leftSideItems)}
        {linkMapper(rightSideItems)}
      </div>
    </div>
  );
}

export default MainMenu;
