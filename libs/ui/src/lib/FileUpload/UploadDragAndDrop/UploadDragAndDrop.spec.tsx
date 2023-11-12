import { render } from '@testing-library/react';

import UploadDragAndDrop from './UploadDragAndDrop';

describe('UploadDragAndDrop', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UploadDragAndDrop />);
    expect(baseElement).toBeTruthy();
  });
});
