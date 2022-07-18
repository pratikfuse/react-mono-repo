import React, { Suspense, useEffect } from 'react';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

// TODO Handle component delay and component timeout to avoid flicker

interface ICreateComponentLoaderParams {
  component: () => Promise<{
    default: React.ComponentType<any>;
  }>;
}

nprogress.configure({
  showSpinner: false,
  trickleSpeed: 4,
});

const FallbackComponent = () => {
  useEffect(() => {
    nprogress.start();
    return () => {
      nprogress.done();
    };
  });
  return null;
};

const AsyncComponent: React.FC<ICreateComponentLoaderParams> =
  ({ component }) => {
    const LazyComponent = React.lazy(component);
    return (
      <Suspense fallback={<FallbackComponent />}>
        <LazyComponent />
      </Suspense>
    );
  };

export default AsyncComponent;
