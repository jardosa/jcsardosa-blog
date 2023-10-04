import { render } from '@testing-library/react';

import AvatarDetails from './AvatarDetails';

describe('AvatarDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AvatarDetails />);
    expect(baseElement).toBeTruthy();
  });
});
