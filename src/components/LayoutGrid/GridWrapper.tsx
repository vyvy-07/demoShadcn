import React, { type ReactNode } from 'react';

const GridWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-12 gap-5 max-lg:flex max-lg:flex-col ">
      {children}
    </div>
  );
};

export default GridWrapper;
