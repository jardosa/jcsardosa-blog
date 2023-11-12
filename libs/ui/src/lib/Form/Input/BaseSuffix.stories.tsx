import type { Meta, StoryObj } from '@storybook/react';
import BaseSuffix from './BaseSuffix';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { LiaHistorySolid } from 'react-icons/lia';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const meta: Meta<typeof BaseSuffix> = {
  component: BaseSuffix,
  title: 'Form/Input/BaseSuffix',
};
export default meta;
type Story = StoryObj<typeof BaseSuffix>;

export const Primary: Story = {
  args: {
    type: 'button-confirm',
    disabled: false,
    label: 'Suffix',
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to BaseSuffix!/gi)).toBeTruthy();
  },
};
