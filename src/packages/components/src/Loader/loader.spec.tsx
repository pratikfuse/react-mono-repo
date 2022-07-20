import React from 'react';
import { render } from '@testing-library/react';
import Loader from '.';

describe('Loader component', () => {
  test('it renders the loader component', () => {
    const { getByText } = render(<Loader />);
    const text = getByText('Loader');
    expect(text).toBeTruthy();
  });
});
