import React, { ReactElement } from 'react';
import AsyncComponent from 'src/Hoc/AsyncComponent';

function withAsync(
  component: () => Promise<{
    default: React.ComponentType<any>;
  }>,
): ReactElement {
  return <AsyncComponent component={component} />;
}

export default withAsync;
