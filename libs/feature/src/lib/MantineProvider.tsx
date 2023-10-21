'use client'
import '@mantine/core/styles.css';

import React, { PropsWithChildren } from 'react'
import { MantineProvider } from '@mantine/core'




const MantineProviderWrapper: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <MantineProvider>{children}</MantineProvider>
  )
}

export default MantineProviderWrapper