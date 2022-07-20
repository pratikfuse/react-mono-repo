import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Pagination } from './pagination';

describe('Pagination Component', () => {
  afterEach(() => cleanup());

  it('renders pagination component', () => {
    const { queryByTestId } = render(
      <Pagination pages={10} currentPage={1} />,
    );
    expect(queryByTestId('pagination')).toBeTruthy();
  });
});
