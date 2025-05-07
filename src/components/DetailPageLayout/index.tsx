import type { PropsGlobal } from '@/interface/propsGlobal';
import Container from '../Container/Container';
import Footer from '../Footer';
import Header from '../Header';
import { useFetchCategory, useFetchCategoryList } from '@/hooks/useCategory';
import GridWrapper from '../LayoutGrid/GridWrapper';
import AdsBanner from '../AdBanners';
import ListArticleSideMini from '../SideRight/ListArticleSideMini';

const DetailPageLayout = ({ children, posts, titleSide }: PropsGlobal) => {
  const { data } = useFetchCategoryList();
  const { data: banner } = useFetchCategoryList();
  return (
    <>
      <Container>{data && <Header dataCategory={data} />}</Container>
      <Container>
        <GridWrapper>
          <div className="col-span-8">{children}</div>
          <div className="col-span-4 ">
            <ListArticleSideMini
              posts={posts}
              title={titleSide}
              titleStyle="mb-5"
              width={125}
              height={70}
              className="mb-5"
            />
            <AdsBanner className="mb-5" />
            <AdsBanner />
          </div>{' '}
        </GridWrapper>
      </Container>
      <Footer dataCategory={data} />
    </>
  );
};

export default DetailPageLayout;
