import type { Meta, StoryObj } from '@storybook/react';
import { AiFillGitlab } from 'react-icons/ai/index'
import Breadcrumbs, { Breadcrumb } from './Breadcrumbs';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const items: Breadcrumb[] = [
  {
    label: 'First Item',
    src: '/',
    avatar: AiFillGitlab
  },
  {
    label: 'Second Item',
    src: '/',
    avatar: AiFillGitlab
  },
  {
    label: 'Third Item',
    src: '/',
    avatar: AiFillGitlab
  },
  {
    label: 'Fourth Item',
    src: '/',
    avatar: AiFillGitlab
  },
  {
    label: 'Fifth Item',
    src: '/',
    avatar: AiFillGitlab
  },
  {
    label: 'Sixth Item',
    src: '/',
    avatar: AiFillGitlab
  },
]

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  title: 'Breadcrumbs',
};
export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Primary = {
  args: {
    items
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Breadcrumbs!/gi)).toBeTruthy();
  },
};
