import { render } from '@testing-library/react';

import MainMenu from './MainMenu';

describe('MainMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MainMenu />);
    expect(baseElement).toBeTruthy();
  });
});
