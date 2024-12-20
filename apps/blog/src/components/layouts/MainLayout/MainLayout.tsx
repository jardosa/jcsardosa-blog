import { AppShell, Burger, Group } from "@mantine/core";
import { useDisclosure, useHeadroom } from "@mantine/hooks";
import { FC, PropsWithChildren, ReactElement, ReactNode } from "react";
import { GiOverlordHelm } from "react-icons/gi";

export interface MainLayoutProps extends PropsWithChildren {
  logo?: string
  navItems?: ReactElement | ReactNode
  bottomNavItems?: ReactElement | ReactNode
  onClickAdminLogo?: () => void
  isAdmin?: boolean
  disabled?: boolean
}

const MainLayout: FC<MainLayoutProps> = ({ navItems, logo, children, bottomNavItems, onClickAdminLogo, isAdmin, disabled }) => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] =
    useDisclosure();


  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <AppShell
      disabled={disabled}
      header={{ height: 60, collapsed: !pinned }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },

      }}
      padding="sm"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
          <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
          <img src={logo} width={60} height={60} />
          {isAdmin && <GiOverlordHelm onClick={onClickAdminLogo} role="button" className="w-10 h-10" />}
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="sm" >
        <div className="flex flex-col justify-between flex-1">
          <div>
            {navItems}
          </div>
          <div>
            {bottomNavItems}
          </div>
        </div>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}

export default MainLayout;
