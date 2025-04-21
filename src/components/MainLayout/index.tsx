import type { PropsGlobal } from '@/interface/propsGlobal';
import Container from '../Container/Container';
import Footer from '../Footer';
import Header from '../Header';

const MainLayout = ({ children, dataCategory }: PropsGlobal) => {
  return (
    <html lang="en">
      <Container>
        <Header dataCategory={dataCategory} />
      </Container>
      <body>{children}</body>
      <Footer dataCategory={dataCategory} />
    </html>
  );
};

export default MainLayout;
