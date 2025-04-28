import type { PropsGlobal } from '@/interface/propsGlobal';
import Container from '../Container/Container';
import Footer from '../Footer';
import Header from '../Header';

const MainLayout = ({ children, dataCategory }: PropsGlobal) => {
  return (
    <>
      <Container>
        {dataCategory && <Header dataCategory={dataCategory} />}
      </Container>
      <>{children}</>
      <Footer dataCategory={dataCategory} />
    </>
  );
};

export default MainLayout;
