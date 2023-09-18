import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';

import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Accordion',
};
export default meta;
type Story = StoryObj<typeof Accordion>;

export const Primary: Story = {
  args: {
    children: "Displaying and grouping additional information. Adding granular control over the information on a given page. Shortening pages to reduce scrolling.",
    expanded: true,
    label: 'Use an accordion when:'
  },
};

export const Heading: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    expanded: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const disclosureButton = await canvas.getByRole('button', { name: 'Use an accordion when:' })
    await userEvent.click(disclosureButton)
  },
};
