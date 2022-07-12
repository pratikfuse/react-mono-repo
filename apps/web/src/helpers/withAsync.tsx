import React, { ReactElement } from "react";
import AsyncComponent from "src/Hoc/AsyncComponent";

function withAsync(
  component: () => Promise<{ default: React.ComponentType<any> }>,
  fallback?: React.ReactNode
): ReactElement {
  return <AsyncComponent component={component} fallback={fallback} />;
}

export default withAsync;
