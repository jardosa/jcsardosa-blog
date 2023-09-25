import type { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: 'Badge',
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    label: "Pipeline badge",
    size: "SM",
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="7.5" fill="white" stroke="#666666" />
      <path d="M12 8.7205V7.2795L11.1 7.13043C11.05 6.93168 10.95 6.73292 10.8 6.43478L11.35 5.68944L10.3 4.64596L9.55 5.19255C9.3 5.04348 9.05 4.9441 8.85 4.89441L8.75 4H7.3L7.15 4.89441C6.9 4.9441 6.7 5.04348 6.45 5.19255L5.7 4.64596L4.65 5.68944L5.15 6.43478C5 6.68323 4.95 6.88199 4.85 7.13043L4 7.22981V8.67081L4.9 8.81988C4.95 9.06832 5.05 9.26708 5.2 9.51553L4.7 10.2609L5.75 11.3043L6.5 10.8075C6.7 10.9068 6.95 11.0062 7.2 11.1056L7.35 12H8.85L9 11.1056C9.25 11.0559 9.45 10.9565 9.7 10.8075L10.45 11.354L11.5 10.3106L10.95 9.56522C11.1 9.31677 11.2 9.06832 11.25 8.86957L12 8.7205ZM8 9.46584C7.15 9.46584 6.5 8.81988 6.5 7.97516C6.5 7.13043 7.15 6.48447 8 6.48447C8.85 6.48447 9.5 7.13043 9.5 7.97516C9.5 8.81988 8.85 9.46584 8 9.46584Z" fill="#666666" />
    </svg>
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Badge!/gi)).toBeTruthy();
  },
};
