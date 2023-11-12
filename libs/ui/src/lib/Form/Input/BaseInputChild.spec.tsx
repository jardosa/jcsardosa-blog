import { render } from '@testing-library/react';

import BaseInputChild from './BaseInputChild';

describe('BaseInputChild', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BaseInputChild />);
    expect(baseElement).toBeTruthy();
  });
});
