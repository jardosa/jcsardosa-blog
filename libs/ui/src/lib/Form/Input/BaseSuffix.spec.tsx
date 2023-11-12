import { render } from '@testing-library/react';

import BaseSuffix from './BaseSuffix';

describe('BaseSuffix', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BaseSuffix />);
    expect(baseElement).toBeTruthy();
  });
});
