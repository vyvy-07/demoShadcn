import Container from '@/components/Container/Container';
import GridWrapper from '@/components/LayoutGrid/GridWrapper';
import MainLayout from '@/components/MainLayout';
import SectionTitle from '@/components/SectionTitle';
import ListArticleSideMini from '@/components/SideRight/ListArticleSideMini';
import { SPECIAL_PATH } from '@/constant/dataVinhLong/specialPath';
import { useFetchArticleList } from '@/hooks/useArticle';
import { fetchServerArticleList } from '@/Services/articleService';
import {
  fetchServerCategoryId,
  fetchServerCategoryList,
} from '@/Services/categoryService';
import { transformBlocks } from '@/utils/utilitiesHandling';

const CatePageDynamic = ({ dataServer }: any) => {
  const dataLayout = dataServer?.dataSections?.BlockHead;
  const { data: dataSide } = useFetchArticleList(dataLayout?.BlockHead_Side, 5);
  return (
    <MainLayout>
      <Container>
        <GridWrapper>
          <div className="col-span-9">
            <SectionTitle
              // title={dataLayout?.BlockHead_Side?.title || 'hoat dong'}
              title={dataServer?.dataCate?.name}
              className="mb-5"
            />
            <>Trang thường .... đa dạng nội dung</>
            {/* <ViewMoreButton dataLayout={dataLayout} /> */}
          </div>
          <div className="col-span-3">
            <ListArticleSideMini
              posts={dataSide}
              titleStyle="mb-5"
              title={dataLayout?.BlockHead_Side?.title}
            />
          </div>
        </GridWrapper>
      </Container>
    </MainLayout>
  );
};

export default CatePageDynamic;
export const getStaticPaths = async () => {
  const datapaths: any = [];
  const dataCate = await fetchServerCategoryList();

  const paths = dataCate
    .filter((item: any) => !SPECIAL_PATH.includes(item.alias))
    .map((item: any) => ({
      params: { alias: item.alias }, // Hoặc cấu trúc params phù hợp với [alias].tsx
    }));

  return {
    paths: paths,
    fallback: 'blocking',
  };
};

export async function getStaticProps({ params }: { params: any }) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 7000);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_VL_BASE_URL}/public/layout/DetailPage`,
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
    const dataBlockHead_Main =
      dataSections?.BlockHead &&
      (await fetchServerArticleList(
        {
          ...dataSections?.BlockHead?.BlockHead_Main,
          categoryId: params?.alias,
        },
        7
      ));
    const dataCate = params && (await fetchServerCategoryId(params?.alias));
    const dataServer = JSON.parse(
      JSON.stringify({
        cateHead_Main: dataBlockHead_Main,
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
