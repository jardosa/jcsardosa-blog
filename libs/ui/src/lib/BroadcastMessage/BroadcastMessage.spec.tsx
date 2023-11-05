import { render } from '@testing-library/react';

import BroadcastMessage from './BroadcastMessage';

describe('BroadcastMessage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BroadcastMessage />);
    expect(baseElement).toBeTruthy();
  });
});
