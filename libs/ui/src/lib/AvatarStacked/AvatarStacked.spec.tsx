import { render } from '@testing-library/react';

import AvatarStacked from './AvatarStacked';

describe('AvatarStacked', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AvatarStacked />);
    expect(baseElement).toBeTruthy();
  });
});
