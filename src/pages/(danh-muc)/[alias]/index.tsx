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
import type { Category } from '@/interface/category';
import type { Article } from '@/interface/propsGlobal';
import { fetchServerArticleList } from '@/Services/articleService';
import { fetchServerCategoryList } from '@/Services/categoryService';
import { fetchLayoutPage } from '@/Services/layoutPage';
import { transformBlocks } from '@/utils/utilitiesHandling';

const CatePageDynamic = ({ dataServer }: any) => {
  const dataLayout = dataServer?.dataSections?.CateHead;
  const { data: dataSide } = useFetchArticleList(dataLayout?.CateHead_Side, 5);
  return (
    <MainLayout>
      <Container>
        <GridWrapper>
          <div className="col-span-9">
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
          <div className="col-span-3">
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

export default CatePageDynamic;
export const getStaticPaths = async () => {
  const dataCate = await fetchServerCategoryList();

  const datapaths: any = [];
  dataCate.forEach((element: any) => {
    if (!SPECIAL_PATH.includes(element.alias)) {
      datapaths.push({
        params: { alias: element.alias },
      });
    }
  });
  return {
    paths: datapaths,
    fallback: true, // false or "blocking"
  };
};

export async function getStaticProps() {
  const controller = new AbortController(); // tạo bộ điều khiển để hủy request nếu quá lâu
  const timeout = setTimeout(() => controller.abort(), 7000); // timeout 7 giây

  try {
    // const datalayout = await fetchLayoutPage('cate-page');
    const datalayout = await fetch(
      `/api/cate-page`, // api homepage
      { signal: controller.signal }
    );
    clearTimeout(timeout);
    if (!datalayout?.ok) {
      throw new Error('Failed to fetch');
    }
    const posts = await datalayout?.json();

    const dataTerm = posts?.result?.blocks;
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
