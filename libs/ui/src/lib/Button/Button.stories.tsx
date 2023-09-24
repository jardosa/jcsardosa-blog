import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from './Button';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  argTypes: {
    intent: {
      options: ['confirm', 'danger', 'default'] as Array<ButtonProps['intent']>,
      control: { type: 'radio' },

    },
    category: {
      options: ['primary', 'secondary', 'tertiary'] as Array<ButtonProps['category']>,
      control: { type: 'radio' },
    },
    size: {
      options: ['SM', 'MD'] as Array<ButtonProps['size']>,
      control: { type: 'radio' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'radio' }
    },
    outlineType: {
      options: ['normal', 'dashed'],
      control: { type: 'radio' },
    },
    loading: {
      options: [true, false],
      control: { type: 'radio' }
    }
  }
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { intent: 'default', category: 'primary', size: 'MD', children: 'Base Button' },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Button!/gi)).toBeTruthy();
  },
};
