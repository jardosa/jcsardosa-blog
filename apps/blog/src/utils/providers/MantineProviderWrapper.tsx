import '@mantine/core/styles.css';

import React, { PropsWithChildren } from 'react'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications';


const MantineProviderWrapper: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <MantineProvider>
      <Notifications position='top-right' />

      {children}
    </MantineProvider>
  )
}

export default MantineProviderWrapper