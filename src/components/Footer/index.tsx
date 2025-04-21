import type { PropsGlobal } from '@/interface/propsGlobal';
import React from 'react';
import Container from '../Container/Container';

const Footer = ({ dataCategory }: PropsGlobal) => {
  console.log('dataFooter :>> ', dataCategory);
  return (
    <footer className="">
      <Container> footer</Container>
    </footer>
  );
};

export default Footer;
