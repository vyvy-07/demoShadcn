import ArticleCustomCard from '@/components/Articles/ArticleCustomCard';
import ViewMoreButton from '@/components/Button/ViewMoreButton';
import Container from '@/components/Container/Container';
import GridWrapper from '@/components/LayoutGrid/GridWrapper';
import MainLayout from '@/components/MainLayout';
import SectionTitle from '@/components/SectionTitle';
import ListArticleSideMini from '@/components/SideRight/ListArticleSideMini';
import { useFetchArticleList } from '@/hooks/useArticle';
import type { Article } from '@/interface/propsGlobal';
import { fetchServerArticleList } from '@/Services/articleService';
import {
  fetchServerCategoryId,
  fetchServerCategoryList,
} from '@/Services/categoryService';
import { transformBlocks } from '@/utils/utilitiesHandling';

const CateNewsPage = ({ dataServer }: any) => {
  if (!dataServer?.dataSections) {
    return null;
  }
  const dataLayout = dataServer?.dataSections?.CateHead;
  const { data: dataSide } = useFetchArticleList(dataLayout?.CateHead_Side, 5);
  return (
    <MainLayout>
      <Container>
        <GridWrapper>
          <div className="col-span-8">
            <SectionTitle title={dataServer?.dataCate?.name} className="mb-5" />
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
            <ViewMoreButton dataLayout={dataLayout} />
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
    fallback: 'blocking', // false or "blocking"
  };
};

export async function getStaticProps({ params }: { params: any }) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 7000);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_VL_BASE_URL}/public/layout/NewsSubCatePage`,
      { signal: controller.signal }
    );
    clearTimeout(timeout);
    if (!res?.ok) {
      throw new Error('Failed to fetch');
    }
    const posts = await res?.json();
    const dataTerm = posts?.result?.blocks;
    const dataSections = dataTerm && transformBlocks(dataTerm);
    //cate list article
    const cateHead_Main =
      dataSections?.BlockHead &&
      (await fetchServerArticleList(
        {
          ...dataSections?.BlockHead?.BlockHead_Main,
          categoryId: 'video',
        },
        7
      ));
    const dataCate = await fetchServerCategoryId(params?.alias);
    const dataServer = JSON.parse(
      JSON.stringify({
        cateHead_Main: cateHead_Main,
        dataSections: dataSections,
        dataCate: dataCate,
      })
    );
    return {
      props: { dataServer },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { dataServer: {} }, // Or fallback
    };
  }
}
