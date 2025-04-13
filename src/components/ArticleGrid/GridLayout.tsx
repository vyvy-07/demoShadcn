import React, { type ReactNode } from 'react';

const GridTwoCol = ({ children }: { children: ReactNode }) => {
  return <div className="grid grid-cols-12 gap-5">{children}</div>;
};

export default GridTwoCol;
