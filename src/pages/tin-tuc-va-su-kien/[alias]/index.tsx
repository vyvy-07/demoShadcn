import ArticleCustomCard from '@/components/Articles/ArticleCustomCard';
import Container from '@/components/Container/Container';
import GridWrapper from '@/components/LayoutGrid/GridWrapper';
import MainLayout from '@/components/MainLayout';
import SectionTitle from '@/components/SectionTitle';
import ListArticleSide from '@/components/SideRight/ListArticleSide';
import ListArticleSideMini from '@/components/SideRight/ListArticleSideMini';
import ViewMore from '@/components/ViewMoreBtn';
import { SPECIAL_PATH } from '@/constant/dataVinhLong/specialPath';
import { useFetchArticleList } from '@/hooks/useArticle';
import type { Article } from '@/interface/propsGlobal';
import { fetchServerArticleList } from '@/Services/articleService';
import { fetchServerCategoryList } from '@/Services/categoryService';
import { fetchLayoutPage } from '@/Services/layoutPage';
import { transformBlocks } from '@/utils/utilitiesHandling';

const CateNewsPage = ({ dataServer }: any) => {
  const dataLayout = dataServer?.dataSections?.CateHead;
  const { data: dataSide } = useFetchArticleList(dataLayout?.CateHead_Side, 5);
  return (
    <MainLayout>
      <Container>
        <GridWrapper>
          <div className="col-span-8">
            <SectionTitle
              title={dataLayout?.CateHead_Main?.title || 'hoat dong'}
              className="mb-5"
            />
            {dataServer?.cateHead_Main &&
              dataServer?.cateHead_Main?.map((item: Article, index: number) => {
                return (
                  <div key={item?.id || index}>
                    <ArticleCustomCard
                      dataArticle={item}
                      width={286}
                      height={162}
                      hasSapo={true}
                      hasCate={true}
                      hasDate={true}
                      sapoStyle="line-clamp-3"
                      titleStyle="heading-3"
                    />
                    {index !== dataServer?.cateHead_Main?.length - 1 && (
                      <hr className="pb-5 mt-5 text-grey"></hr>
                    )}
                  </div>
                );
              })}
            <ViewMore dataLayout={dataLayout} />
          </div>
          <div className="col-span-4">
            <ListArticleSideMini
              posts={dataSide}
              titleStyle="mb-5"
              title={dataLayout?.CateHead_Side?.title}
            />
          </div>
        </GridWrapper>
      </Container>
    </MainLayout>
  );
};

export default CateNewsPage;
export const getStaticPaths = async () => {
  const dataCate = await fetchServerCategoryList();
  const data = dataCate?.filter((item: any) => item?.type == 'tin-tuc');
  const paths = data[0]?.subCates?.map((itemSub: any) => {
    return { params: { alias: `${itemSub?.alias}` } };
  });
  return {
    paths: paths || [],
    fallback: false, // false or "blocking"
  };
};

export async function getStaticProps() {
  try {
    const datalayout = await fetchLayoutPage('cate-page');
    const dataTerm = datalayout?.result?.blocks;
    const dataSections = transformBlocks(dataTerm);

    const cateHead_Main = await fetchServerArticleList(
      dataSections?.CateHead?.CateHead_Main,
      7
    );

    const dataServer = {
      cateHead_Main: cateHead_Main,
      dataSections: dataSections,
    };

    return {
      props: { dataServer },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { dataServer: [] }, // Or fallback
    };
  }
}
