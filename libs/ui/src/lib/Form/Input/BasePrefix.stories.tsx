import type { Meta, StoryObj } from '@storybook/react';
import BasePrefix from './BasePrefix';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { LiaHistorySolid } from 'react-icons/lia';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const meta: Meta<typeof BasePrefix> = {
  component: BasePrefix,
  title: 'Form/Input/BasePrefix',
};
export default meta;
type Story = StoryObj<typeof BasePrefix>;

export const Primary: Story = {
  args: {
    disabled: false,
    type: 'default',
    label: <div className='flex items-center gap-1'>
      <LiaHistorySolid className='w-5 h-5' /><ChevronDownIcon className='w-5 h-5' />
    </div>,
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to BasePrefix!/gi)).toBeTruthy();
  },
};
