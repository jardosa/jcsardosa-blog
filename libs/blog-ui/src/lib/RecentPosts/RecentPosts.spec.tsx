import { render } from '@testing-library/react';

import RecentPosts from './RecentPosts';

describe('RecentPosts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RecentPosts />);
    expect(baseElement).toBeTruthy();
  });
});
