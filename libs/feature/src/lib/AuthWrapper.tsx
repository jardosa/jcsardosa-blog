'use client'

import { useWhoAmIQuery } from "@nx-nextjs-tailwind-storybook/data-access"
import { useRouter, usePathname } from "next/navigation"
import { FC, PropsWithChildren } from "react"


export const AuthWrapper: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter()
  const pathname = usePathname()
  useWhoAmIQuery({
    onCompleted: (data) => {
      if (!data?.whoAmI && (!pathname.includes('login') && !pathname.includes('logout'))) {
        router.push('/login')
      }
    }
  })


  return <>{children}</>
}