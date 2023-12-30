import { cn } from 'libs/ui/src/utils/tailwindCn'
import React, { FC, PropsWithChildren } from 'react'

const SingleBlogLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={cn('max-w-[680px] mx-auto')}>
      {children}
    </div>
  )
}

export default SingleBlogLayout