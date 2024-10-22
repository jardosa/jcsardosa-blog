import type { Meta, StoryObj } from '@storybook/react';
import { RecentPosts } from './RecentPosts';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { MantineProvider } from '@mantine/core';
import { Category } from '@nx-nextjs-tailwind-storybook/data-access';
import { useState } from 'react';

const meta: Meta<typeof RecentPosts> = {
  component: RecentPosts,
  title: 'RecentPosts',
};
export default meta;
type Story = StoryObj<typeof RecentPosts>;

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
    ],
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeTab, setActiveTab] = useState<Category | 'ALL'>('ALL')
    return <MantineProvider>
      <RecentPosts {...args} activeTab={activeTab} setActiveTab={setActiveTab} />
    </MantineProvider>
  }
};

export const Heading: Story = {
  args: {

  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Welcome to RecentPosts!/gi)).toBeTruthy();
  },
};
