import { render } from '@testing-library/react';

import BasePrefix from './BasePrefix';

describe('BasePrefix', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BasePrefix />);
    expect(baseElement).toBeTruthy();
  });
});
