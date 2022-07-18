import React from 'react';

const AsyncLoaderTest: React.FC<{ text: string }> =
  props => {
    return <div>{props.text}</div>;
  };

export default AsyncLoaderTest;
