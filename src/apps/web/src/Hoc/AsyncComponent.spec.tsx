import React from 'react';
import AsyncComponent from './AsyncComponent';
import { cleanup, render } from '@testing-library/react';

describe('React lazy component loader', () => {
  afterEach(cleanup);

  it('renders a loader', () => {
    render(
      <AsyncComponent
        component={() => import('./asyncLoaderTest')}
      />,
    );
  });
});
