import type { Meta, StoryObj } from '@storybook/react';
import Drawer from './Drawer';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Button from '../Button/Button';
import { useState } from 'react';

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  title: 'Drawer',
};
export default meta;
type Story = StoryObj<typeof Drawer>;

export const Primary: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true)
    const onClose = () => setOpen(false)
    return <div className='grid w-full h-screen place-items-center'>
      <Button label='Toggle' onClick={() => setOpen((prevVal) => !prevVal)} />
      <Drawer {...args} open={open} onClose={onClose} />
    </div>
  },
  args: {
    title: 'Title',
    primaryAction: {
      label: 'Primary',
      onClick: () => console.log('Primary')
    },
    secondaryAction: {
      label: 'Secondary',
      onClick: () => console.log('Secondary')
    }
  },
};

export const Heading: Story = {
  args: {
    title: 'Title',
    primaryAction: {
      label: 'Primary',
      onClick: () => console.log('Primary')
    },
    secondaryAction: {
      label: 'Secondary',
      onClick: () => console.log('Secondary')
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Drawer!/gi)).toBeTruthy();
  },
};
