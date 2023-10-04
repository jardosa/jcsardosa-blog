import { render } from '@testing-library/react';

import AvatarGroup from './AvatarGroup';

describe('AvatarGroup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AvatarGroup />);
    expect(baseElement).toBeTruthy();
  });
});
