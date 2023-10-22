import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from './Button';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { ArrowUpTrayIcon, BarsArrowDownIcon, ChevronDownIcon } from '@heroicons/react/20/solid';

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
  args: {
    intent: 'default', category: 'primary', size: 'MD', label: 'Base Button', emoji: 'heart',
  },
};

export const Split: Story = {
  args: {
    intent: 'default', category: 'primary', size: 'MD', label: 'Split Button', emoji: 'heart',
    isSplit: true,
    splitIcon: BarsArrowDownIcon,
    rightOnClick: () => console.log('on click')
  },
}

export const Dropdown: Story = {
  args: {
    intent: 'default',
    category: 'primary',
    size: 'MD',
    label: 'Dropdown',
    emoji: 'heart',
    isSplit: true,
    buttonType: 'dropdown',
    splitIcon: BarsArrowDownIcon,
    onClick: () => console.log('on click')
  },
}

export const KitchenSink: Story = {
  args: {
    intent: 'default',
    category: 'primary',
    size: 'MD',
    label: 'Kitchen Sink',
    emoji: 'heart',
    badgeLabel: 'Badge',
    buttonType: 'default',
    isSplit: true,
    splitIcon: BarsArrowDownIcon,
    iconLeft: BarsArrowDownIcon,
    rightOnClick: () => console.log('on click')
  },
}


export const Ellipsis: Story = {
  args: {
    intent: 'default', category: 'primary', size: 'MD',
    buttonType: 'ellipsis',
    onClick: () => console.log('on click')
  },
}
export const Icon: Story = {
  args: {
    intent: 'default', category: 'primary', size: 'MD',
    buttonType: 'icon',
    iconLeft: BarsArrowDownIcon,
    onClick: () => console.log('on click')
  },
}

export const IconDropdown: Story = {
  args: {
    intent: 'default', category: 'primary', size: 'MD',
    buttonType: 'icon-dropdown',
    iconLeft: ArrowUpTrayIcon,
    onClick: () => console.log('on click')
  },
}

export const IconDropdownSplit: Story = {
  args: {
    intent: 'default', category: 'primary', size: 'MD',
    buttonType: 'icon-dropdown-split',
    iconLeft: ArrowUpTrayIcon,
    onClick: () => console.log('on click')
  },
}

export const DropdownSplit: Story = {
  args: {
    intent: 'default', category: 'primary', size: 'MD',
    buttonType: 'dropdown-split',
    label: 'Default Split',
    onClick: () => console.log('on click')
  },
}

export const Sorting: Story = {
  args: {
    intent: 'default', category: 'primary', size: 'MD',
    buttonType: 'sorting',
    label: 'Default Split',
    onClick: () => console.log('on click')
  },
}


export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Button!/gi)).toBeTruthy();
  },
};
