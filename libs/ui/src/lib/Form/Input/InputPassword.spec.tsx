import { Input } from '@mantine/core';
import { render } from '@testing-library/react';

describe('Input', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Input />);
    expect(baseElement).toBeTruthy();
  });
});
