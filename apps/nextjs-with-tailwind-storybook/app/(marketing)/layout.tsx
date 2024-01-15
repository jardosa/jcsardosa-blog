import { ApolloWrapper } from '@nx-nextjs-tailwind-storybook/feature'
import '../styles.css'
import '@mantine/core/styles.css';
import MantineProviderWrapper from 'libs/feature/src/lib/MantineProvider'
import MainMenu from 'libs/ui/src/lib/MainMenu/MainMenu';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
  }) {
  const leftSideItems = [{
    label: "Blog",
    href: "/blog"
  }]
  const rightSideItems = [{
    label: "About",
    href: "/about"
  }]
  return (
    <ApolloWrapper>
      <MantineProviderWrapper>
        <MainMenu
          logo='https://i.pinimg.com/originals/82/c6/5b/82c65b9bb0a75026fc4c82a438b4cc9b.jpg'
          leftSideItems={leftSideItems} rightSideItems={rightSideItems} />
        {children}
      </MantineProviderWrapper>
    </ApolloWrapper>
  )
}
