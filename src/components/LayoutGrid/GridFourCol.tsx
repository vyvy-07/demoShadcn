import type { PropsGlobal } from '@/interface/ArticleProps';
import React from 'react';

const GridFourCol = ({ children }: PropsGlobal) => {
  return (
    <div>
      <>{children}</>
    </div>
  );
};

export default GridFourCol;
