import type { Meta, StoryObj } from '@storybook/react';
import { PostList } from './PostList';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof PostList> = {
  component: PostList,
  title: 'PostList',
};
export default meta;
type Story = StoryObj<typeof PostList>;

export const Primary: Story = {
  args: {
    posts: [
      {
        date: 'September 24.2020',
        title: 'Bad Design vs. Good Design: 5 Examples We can Learn From',
        tags: [{ 'label': 'HCI', value: 'hci' }]
      },
      {
        date: 'April 03.2020',
        title: 'User Interface Design Guidelines: 10 Rules of Thumb',
        tags: [{ 'label': 'Design Thinking', value: 'design-thinking' }]
      },
      {
        date: 'January 29.2020',
        title: 'The 7 Factors that Influence User Experience',
        tags: [
          { 'label': 'HCI', value: 'hci' },
          { 'label': 'Usability', value: 'usability' },
          { 'label': 'Design Thinking', value: 'design-thinking' },
          { 'label': 'User Experience', value: 'user-experience' },
        ]
      },
      {
        date: 'September 14.2019',
        title: 'Usability: A part of the User Experience ',
        tags: [{ 'label': 'HCI', value: 'hci' }]
      },
    ]
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Welcome to PostList!/gi)).toBeTruthy();
  },
};
