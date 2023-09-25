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
    variant: 'success',
    primaryAction: { action: () => console.log('Primary Action'), label: "Action to take" },
    secondaryAction: { action: () => console.log('Secondary Action'), label: "Alternate action" },
    isDismissible: true,
    onDismiss: () => console.log('on dismiss')
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Alert!/gi)).toBeTruthy();
  },
};
