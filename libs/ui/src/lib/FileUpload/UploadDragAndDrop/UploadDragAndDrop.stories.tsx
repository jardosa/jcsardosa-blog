import type { Meta, StoryObj } from '@storybook/react';
import UploadDragAndDrop from './UploadDragAndDrop';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof UploadDragAndDrop> = {
  component: UploadDragAndDrop,
  title: 'UploadDragAndDrop',
};
export default meta;
type Story = StoryObj<typeof UploadDragAndDrop>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to UploadDragAndDrop!/gi)).toBeTruthy();
  },
};
