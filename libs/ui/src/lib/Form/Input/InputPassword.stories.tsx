import type { Meta, StoryObj } from '@storybook/react';
import InputPassword from './InputPassword';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Primary as BasePrimary } from './BaseInputChild.stories'
import { XCircleIcon } from '@heroicons/react/20/solid';

const meta: Meta<typeof InputPassword> = {
  component: InputPassword,
  title: 'InputPassword',
};
export default meta;
type Story = StoryObj<typeof InputPassword>;

export const Primary: Story = {
  args: {
    placeholder: 'Password',
    label: 'Password',
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Input!/gi)).toBeTruthy();
  },
};
