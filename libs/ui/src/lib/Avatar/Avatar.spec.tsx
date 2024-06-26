import { render } from '@testing-library/react';

import Avatar from './Avatar';

describe('Avatar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Avatar variant='identicon' initial='G' />);
    expect(baseElement).toBeTruthy();
  });
});
