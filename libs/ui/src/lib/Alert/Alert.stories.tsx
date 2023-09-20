import type { Meta, StoryObj } from '@storybook/react';
import Alert from './Alert';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: 'Alert',
  argTypes: {
    variant: {
      options: ['success', 'info', 'warning', 'danger', 'tip'],
      control: { type: 'radio' },
    },
    isDismissible: {
      options: [true, false],
      control: { type: 'radio' }
    }
  }
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Primary: Story = {
  args: {
    title: "Title",
    text: "The body content lets the user know why, and how to remedy or proceed.",
    variant: 'success'
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Alert!/gi)).toBeTruthy();
  },
};
