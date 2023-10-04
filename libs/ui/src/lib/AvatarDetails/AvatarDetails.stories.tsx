import type { Meta, StoryObj } from '@storybook/react';
import AvatarDetails from './AvatarDetails';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof AvatarDetails> = {
  component: AvatarDetails,
  title: 'AvatarDetails',
};
export default meta;
type Story = StoryObj<typeof AvatarDetails>;

export const Primary: Story = {
  args: {
    src: 'https://cdn.theorg.com/41eed00d-66e0-4f19-991d-970ee29c7315_medium.jpg',
    primaryText: "John Ardosa",
    secondaryText: "@johnArdosa"
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to AvatarDetails!/gi)).toBeTruthy();
  },
};
