import React, { Suspense } from "react";

const LOADER_COMPONENT_TIMEOUT = 3000;
const LOADER_COMPONENT_DELAY = 800;

interface ICreateComponentLoaderParams {
  component: () => Promise<{ default: React.ComponentType<any> }>;
  fallback: React.ReactNode;
}

const AsyncComponent: React.FC<ICreateComponentLoaderParams> = ({
  component,
  fallback,
}) => {
  const LazyComponent = React.lazy(component);
  return (
    <Suspense fallback={fallback}>
      <LazyComponent />
    </Suspense>
  );
};

export default AsyncComponent;
