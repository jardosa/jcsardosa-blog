import type { Meta, StoryObj } from '@storybook/react';
import BroadcastMessage from './BroadcastMessage';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof BroadcastMessage> = {
  component: BroadcastMessage,
  title: 'BroadcastMessage',
};
export default meta;
type Story = StoryObj<typeof BroadcastMessage>;

export const Primary: Story = {
  args: {
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam sollicitudin tempor id eu nisl nunc mi. Auctor augue mauris augue neque gravida in fermentum. ',
    onClose: () => {
      console.log('close')
    }
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to BroadcastMessage!/gi)).toBeTruthy();
  },
};
