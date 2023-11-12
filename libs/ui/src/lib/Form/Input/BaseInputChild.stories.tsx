import type { Meta, StoryObj } from '@storybook/react';
import BaseInputChild from './BaseInputChild';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

const meta: Meta<typeof BaseInputChild> = {
  component: BaseInputChild,
  title: 'Form/Input/BaseInputChild',
};
export default meta;
type Story = StoryObj<typeof BaseInputChild>;

export const Primary: Story = {
  args: {
    label: 'Label',
    size: 'md',
    isSearch: true,
    isClearable: true,
    validationText: '28 Characters Remaining',
    prefix: {
      label: <MagnifyingGlassIcon className='w-5 h-5 text-neutral-500' />,
    },
    suffix: {
      label: <MagnifyingGlassIcon className='w-5 h-5 text-neutral-500' />
    },
  },

};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to BaseInputChild!/gi)).toBeTruthy();
  },
};
