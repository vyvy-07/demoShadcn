import React, { type ReactNode } from 'react';

const GridWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="grid grid-cols-12 gap-5">{children}</div>;
};

export default GridWrapper;
