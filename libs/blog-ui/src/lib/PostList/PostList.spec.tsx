import { render } from '@testing-library/react';

import PostList from './PostList';

describe('PostList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PostList />);
    expect(baseElement).toBeTruthy();
  });
});
