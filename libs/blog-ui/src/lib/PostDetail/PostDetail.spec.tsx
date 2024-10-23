import { render } from '@testing-library/react';

import PostDetail from './PostDetail';

describe('PostDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PostDetail />);
    expect(baseElement).toBeTruthy();
  });
});
