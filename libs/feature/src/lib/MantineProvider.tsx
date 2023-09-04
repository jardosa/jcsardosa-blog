'use client'

import React, { PropsWithChildren } from 'react'
import { MantineProvider } from '@mantine/core'




const MantineProviderWrapper: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>{children}</MantineProvider>
  )
}

export default MantineProviderWrapper