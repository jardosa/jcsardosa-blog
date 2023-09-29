import type { Meta, StoryObj } from '@storybook/react';
import Badge, { BadgeProps } from './Badge';
import { CalendarIcon } from '@heroicons/react/24/solid'

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: 'Badge',
  argTypes: {
    intent: {
      options: ['neutral-muted', 'neutral', 'info', 'danger', 'success', 'warning', 'tier'] as Array<BadgeProps['intent']>,
      control: { type: 'radio' },
    }
  }
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    label: "Pipeline badge",
    size: "SM",
    icon: CalendarIcon
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Badge!/gi)).toBeTruthy();
  },
};
