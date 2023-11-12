import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Primary as BasePrimary } from './BaseInputChild.stories'

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Input',
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    ...BasePrimary.args,
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Input!/gi)).toBeTruthy();
  },
};
