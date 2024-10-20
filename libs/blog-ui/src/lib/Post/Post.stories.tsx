import type { Meta, StoryObj } from '@storybook/react';
import { Post } from './Post';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Post> = {
  component: Post,
  title: 'Post',
};
export default meta;
type Story = StoryObj<typeof Post>;

export const Primary: Story = {
  args: {
    title: 'Bad Design vs. Good Design: 5 Examples We can Learn From',
    date: 'September 24.2020',
    tags: [{ label: 'HCI', value: 'hci', }, { label: 'TDI', value: 'tdi' }]
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Welcome to Post!/gi)).toBeTruthy();
  },
};
