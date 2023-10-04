import type { Meta, StoryObj } from '@storybook/react';
import AvatarGroup from './AvatarGroup';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof AvatarGroup> = {
  component: AvatarGroup,
  title: 'AvatarGroup',
};
export default meta;
type Story = StoryObj<typeof AvatarGroup>;

export const SingleAvatar: Story = {
  args: {
    avatars: [
      {
        src: 'https://cdn.theorg.com/41eed00d-66e0-4f19-991d-970ee29c7315_medium.jpg',
        primaryText: "John Ardosa",
        secondaryText: "@johnArdosa"
      }
    ]
  },
};

export const MultipleAvatars: Story = {
  args: {
    avatars: [
      {
        src: 'https://cdn.theorg.com/41eed00d-66e0-4f19-991d-970ee29c7315_medium.jpg',
        primaryText: "John Ardosa",
        secondaryText: "@johnArdosa"
      },
      {
        src: 'https://cdn.theorg.com/41eed00d-66e0-4f19-991d-970ee29c7315_medium.jpg',
        primaryText: "John Ardosa",
        secondaryText: "@johnArdosa"
      },
      {
        src: 'https://cdn.theorg.com/41eed00d-66e0-4f19-991d-970ee29c7315_medium.jpg',
        primaryText: "John Ardosa",
        secondaryText: "@johnArdosa"
      },
      {
        src: 'https://cdn.theorg.com/41eed00d-66e0-4f19-991d-970ee29c7315_medium.jpg',
        primaryText: "John Ardosa",
        secondaryText: "@johnArdosa"
      },
      {
        src: 'https://cdn.theorg.com/41eed00d-66e0-4f19-991d-970ee29c7315_medium.jpg',
        primaryText: "John Ardosa",
        secondaryText: "@johnArdosa"
      },
      {
        src: 'https://cdn.theorg.com/41eed00d-66e0-4f19-991d-970ee29c7315_medium.jpg',
        primaryText: "John Ardosa",
        secondaryText: "@johnArdosa"
      },
      {
        src: 'https://cdn.theorg.com/41eed00d-66e0-4f19-991d-970ee29c7315_medium.jpg',
        primaryText: "John Ardosa",
        secondaryText: "@johnArdosa"
      },
      {
        src: 'https://cdn.theorg.com/41eed00d-66e0-4f19-991d-970ee29c7315_medium.jpg',
        primaryText: "John Ardosa",
        secondaryText: "@johnArdosa"
      },
      {
        src: 'https://cdn.theorg.com/41eed00d-66e0-4f19-991d-970ee29c7315_medium.jpg',
        primaryText: "John Ardosa",
        secondaryText: "@johnArdosa"
      },
      {
        src: 'https://cdn.theorg.com/41eed00d-66e0-4f19-991d-970ee29c7315_medium.jpg',
        primaryText: "John Ardosa",
        secondaryText: "@johnArdosa"
      },
    ]
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to AvatarGroup!/gi)).toBeTruthy();
  },
};
