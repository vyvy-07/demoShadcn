import ArticleCustomCard from '@/components/Articles/ArticleCustomCard';
import Container from '@/components/Container/Container';
import GridWrapper from '@/components/LayoutGrid/GridWrapper';
import MainLayout from '@/components/MainLayout';
import SectionTitle from '@/components/SectionTitle';
import ListArticleSideMini from '@/components/SideRight/ListArticleSideMini';
import ViewMore from '@/components/ViewMoreBtn';
import { SPECIAL_PATH } from '@/constant/dataVinhLong/specialPath';
import { useFetchArticleList } from '@/hooks/useArticle';
import type { Article } from '@/interface/propsGlobal';
import { fetchServerArticleList } from '@/Services/articleService';
import {
  fetchServerCategoryId,
  fetchServerCategoryList,
} from '@/Services/categoryService';
import { transformBlocks } from '@/utils/utilitiesHandling';

const CatePageDynamic = ({ dataServer }: any) => {
  const dataLayout = dataServer?.dataSections?.BlockHead;
  const { data: dataSide } = useFetchArticleList(dataLayout?.BlockHead_Main, 5);
  return (
    <MainLayout>
      <Container>
        <GridWrapper>
          <div className="col-span-9">
            <SectionTitle
              // title={dataLayout?.CateHead_Main?.title || 'hoat dong'}
              title={dataServer?.dataCate?.name}
              className="mb-5"
            />
            <>Trang thường .... đa dạng nội dung</>
            {/* <ViewMore dataLayout={dataLayout} /> */}
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
    fallback: true,
  };
};

export async function getStaticProps({ params }: { params: any }) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 7000);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NTV_BASE_URL}/public/layout/NewsSubCatePage`,
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
          categoryId: params?.alias,
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
    if (!dataSections) {
      return {
        props: { dataServer },
        revalidate: 60,
      };
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { dataServer: {} }, // Or fallback
    };
  }
}
