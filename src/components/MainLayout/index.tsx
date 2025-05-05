import type { PropsGlobal } from '@/interface/propsGlobal';
import Container from '../Container/Container';
import Footer from '../Footer';
import Header from '../Header';
import { useFetchCategory, useFetchCategoryList } from '@/hooks/useCategory';

const MainLayout = ({ children }: PropsGlobal) => {
  const { data } = useFetchCategoryList();
  return (
    <>
      <Container>{data && <Header dataCategory={data} />}</Container>
      <>{children}</>
      <Footer dataCategory={data} />
    </>
  );
};

export default MainLayout;
