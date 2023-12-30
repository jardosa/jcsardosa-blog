import type { Meta, StoryObj } from '@storybook/react';
import MainMenu from './MainMenu';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof MainMenu> = {
  component: MainMenu,
  title: 'MainMenu',
};
export default meta;
type Story = StoryObj<typeof MainMenu>;

export const Primary: Story = {
  args: {
    logo: 'https://i.pinimg.com/originals/82/c6/5b/82c65b9bb0a75026fc4c82a438b4cc9b.jpg',
    leftSideItems: [{ label: "Home", href: '#' }],
    rightSideItems: [{ label: "Settings", href: '#' }]
  },

};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to MainMenu!/gi)).toBeTruthy();
  },
};
