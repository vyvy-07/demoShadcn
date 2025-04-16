import type { PropsGlobal } from '@/interface/propsGlobal';
import React from 'react';
import Header from '../Header';
import Container from '../Container/Container';

const MainLayout = ({ children, dataCategory }: PropsGlobal) => {
  return (
    <>
      <Container>
        <Header dataCategory={dataCategory} />
      </Container>
      <>{children}</>
    </>
  );
};

export default MainLayout;
