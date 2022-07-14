import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Pagination } from './pagination';

describe('Pagination Component', () => {
  afterEach(() => cleanup());

  it('renders pagination component', () => {
    const { queryByTestId } = render(<Pagination />);
    expect(queryByTestId('pagination')).toHaveTextContent(
      'Pagination',
    );
  });
});
