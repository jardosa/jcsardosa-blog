import type { Meta, StoryObj } from '@storybook/react';
import AvatarStacked from './AvatarStacked';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof AvatarStacked> = {
  component: AvatarStacked,
  title: 'AvatarStacked',
};
export default meta;
type Story = StoryObj<typeof AvatarStacked>;

export const Primary: Story = {
  args: {
    size: 'sm',
    avatars: [
      {
        src: 'https://cdn.theorg.com/41eed00d-66e0-4f19-991d-970ee29c7315_medium.jpg',
      },
      {
        src: 'https://cdn.theorg.com/41eed00d-66e0-4f19-991d-970ee29c7315_medium.jpg',
      },
      {
        src: 'https://cdn.theorg.com/41eed00d-66e0-4f19-991d-970ee29c7315_medium.jpg',
      },
      {
        src: 'https://cdn.theorg.com/41eed00d-66e0-4f19-991d-970ee29c7315_medium.jpg',
      },
      {
        src: 'https://cdn.theorg.com/41eed00d-66e0-4f19-991d-970ee29c7315_medium.jpg',
      },
      {
        src: 'https://cdn.theorg.com/41eed00d-66e0-4f19-991d-970ee29c7315_medium.jpg',
      },
      {
        src: 'https://cdn.theorg.com/41eed00d-66e0-4f19-991d-970ee29c7315_medium.jpg',
      },
      {
        src: 'https://cdn.theorg.com/41eed00d-66e0-4f19-991d-970ee29c7315_medium.jpg',
      },
      {
        src: 'https://cdn.theorg.com/41eed00d-66e0-4f19-991d-970ee29c7315_medium.jpg',
      },
      {
        src: 'https://cdn.theorg.com/41eed00d-66e0-4f19-991d-970ee29c7315_medium.jpg',
      },
    ]
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to AvatarStacked!/gi)).toBeTruthy();
  },
};
