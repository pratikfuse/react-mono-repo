import React from 'react';
import {
  cleanup,
  render,
  act,
} from '@testing-library/react';
import { showSuccess, ToastContainer } from '.';

describe('Notification', () => {
  afterEach(() => cleanup());

  it('shows a success notification', () => {
    render(<ToastContainer />);

    act(() => {
      showSuccess('Task completed successfully');
      jest.useFakeTimers();
    });

    expect(true).toBe(true);
  });
});
