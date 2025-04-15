import type { PropsGlobal } from '@/interface/propsGlobal';
import React from 'react';
import Header from '../Header';

const MainLayout = ({ children, dataCategory }: PropsGlobal) => {
  return (
    <>
      <Header dataCategory={dataCategory} />
      <>{children}</>
    </>
  );
};

export default MainLayout;
