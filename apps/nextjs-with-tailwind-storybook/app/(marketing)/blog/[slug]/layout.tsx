import { cn } from 'libs/ui/src/utils/tailwindCn'
import React, { FC, PropsWithChildren } from 'react'

const SingleBlogLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={cn('max-w-[800px] mx-auto pt-10')}>
      {children}
    </div>
  )
}

export default SingleBlogLayout