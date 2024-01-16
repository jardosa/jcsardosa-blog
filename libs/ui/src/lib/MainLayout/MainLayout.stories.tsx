import { FaGauge } from "react-icons/fa6";

import type { Meta, StoryObj } from '@storybook/react';
import MainLayout from './MainLayout';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import MantineProviderWrapper from 'libs/feature/src/lib/MantineProvider';
import { NavLink } from '@mantine/core';
import { FaFingerprint } from "react-icons/fa";

const meta: Meta<typeof MainLayout> = {
  component: MainLayout,
  title: 'MainLayout',
};
export default meta;
type Story = StoryObj<typeof MainLayout>;

export const Primary: Story = {
  args: {
    logo: 'https://i.pinimg.com/originals/82/c6/5b/82c65b9bb0a75026fc4c82a438b4cc9b.jpg',
    navItems: <>
      <NavLink
        href="#required-for-focus"
        label="First parent link"
        leftSection={<FaGauge size="1rem" />}
        childrenOffset={28}
      >
        <NavLink href="#required-for-focus" label="First child link" />
        <NavLink label="Second child link" href="#required-for-focus" />
        <NavLink label="Nested parent link" childrenOffset={28} href="#required-for-focus">
          <NavLink label="First child link" href="#required-for-focus" />
          <NavLink label="Second child link" href="#required-for-focus" />
          <NavLink label="Third child link" href="#required-for-focus" />
        </NavLink>
      </NavLink>

      <NavLink
        href="#required-for-focus"
        label="Second parent link"
        leftSection={<FaFingerprint size="1rem" />}
        childrenOffset={28}
        defaultOpened
      >
        <NavLink label="First child link" href="#required-for-focus" />
        <NavLink label="Second child link" href="#required-for-focus" />
        <NavLink label="Third child link" href="#required-for-focus" />
      </NavLink>
    </>
  },
  render: (args) => <MantineProviderWrapper>
    <MainLayout {...args}>Main</MainLayout>
  </MantineProviderWrapper >
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to MainLayout!/gi)).toBeTruthy();
  },
};
