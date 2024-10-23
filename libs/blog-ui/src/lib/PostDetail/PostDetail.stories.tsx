import type { Meta, StoryObj } from '@storybook/react';
import { PostDetail } from './PostDetail';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Category } from '@nx-nextjs-tailwind-storybook/data-access';

const meta: Meta<typeof PostDetail> = {
  component: PostDetail,
  title: 'PostDetail',
};
export default meta;
type Story = StoryObj<typeof PostDetail>;

export const Primary: Story = {
  args: {
    author: 'John Ardosa',
    category: Category.Automotive,
    content: 'Content',
    coverPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Subaru_Impreza_WRX_STI_-_Blue_%28cropped%29.jpg/1200px-Subaru_Impreza_WRX_STI_-_Blue_%28cropped%29.jpg',
    date: new Date().toISOString(),
    title: 'Subaru WRX STI',
    tags: [{ label: 'AUTOMOTIVE', value: 'automotive' }]
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Welcome to PostDetail!/gi)).toBeTruthy();
  },
};
