import type { Meta, StoryObj } from '@storybook/react';
import Link from './Link';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Link> = {
  component: Link,
  title: 'Link',
};
export default meta;
type Story = StoryObj<typeof Link>;

export const Primary: Story = {
  args: {
    href: 'http://localhost:4400/?path=/story/link--primary',
    children: 'Link'
  }
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Link!/gi)).toBeTruthy();
  },
};
