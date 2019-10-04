import React from 'react';
import { CircularProgress } from '@material-ui/core';

const PageLoader = () => {
  return (
    <div
      className="d-flex justify-content-center align-content-center w-100"
      style={{ height: '95vh' }}
    >
      <CircularProgress size={200} />
    </div>
  );
};

export { PageLoader };
