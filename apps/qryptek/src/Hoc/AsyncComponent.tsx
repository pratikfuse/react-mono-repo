import React, { Suspense } from "react";

// TODO Handle component delay and component timeout to avoid flicker

interface ICreateComponentLoaderParams {
  component: () => Promise<{ default: React.ComponentType<any> }>;
  fallback?: React.ReactNode;
}

const FallbackComponent = () => {
  return <div>Loading</div>;
};

const AsyncComponent: React.FC<ICreateComponentLoaderParams> = ({
  component,
  fallback,
}) => {
  const LazyComponent = React.lazy(component);
  return (
    <Suspense fallback={fallback || <FallbackComponent />}>
      <LazyComponent />
    </Suspense>
  );
};

export default AsyncComponent;
