import type { Meta, StoryObj } from '@storybook/react';
import { BlogUi } from './blog-ui';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof BlogUi> = {
  component: BlogUi,
  title: 'BlogUi',
};
export default meta;
type Story = StoryObj<typeof BlogUi>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to BlogUi!/gi)).toBeTruthy();
  },
};
