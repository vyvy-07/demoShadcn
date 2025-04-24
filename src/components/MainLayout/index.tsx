import type { PropsGlobal } from '@/interface/propsGlobal';
import Container from '../Container/Container';
import Footer from '../Footer';
import Header from '../Header';

const MainLayout = ({ children, dataCategory }: PropsGlobal) => {
  return (
    <>
      <Container>
        <Header dataCategory={dataCategory} />
      </Container>
      <body cz-shortcut-listen="true">{children}</body>
      <Footer dataCategory={dataCategory} />
    </>
  );
};

export default MainLayout;
