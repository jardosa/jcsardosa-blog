import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Avatar',
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const User: Story = {
  args: {
    src: 'https://cdn.theorg.com/41eed00d-66e0-4f19-991d-970ee29c7315_medium.jpg'
  },
};

export const Project = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Avatar!/gi)).toBeTruthy();
  },
};
