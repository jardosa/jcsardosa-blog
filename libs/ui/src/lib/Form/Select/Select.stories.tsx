import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { ColourOption, colourOptions } from './data';


const filterColors = (inputValue: string) => {
  return colourOptions.filter((i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const loadOptions = (
  inputValue: string,
  callback: (options: ColourOption[]) => void
) => {
  setTimeout(() => {
    callback(filterColors(inputValue));
  }, 1000);
};


const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Select',
};
export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    loadOptions,
    label: 'Select',
    isClearable: true,
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Select!/gi)).toBeTruthy();
  },
};
