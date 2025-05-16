import ArticleCustomCard from '@/components/Articles/ArticleCustomCard';
import Container from '@/components/Container/Container';
import GridWrapper from '@/components/LayoutGrid/GridWrapper';
import MainLayout from '@/components/MainLayout';
import SectionTitle from '@/components/SectionTitle';
import ListArticleSideMini from '@/components/SideRight/ListArticleSideMini';
import { useFetchArticleList } from '@/hooks/useArticle';
import { useFetchCategory } from '@/hooks/useCategory';
import { fetchServerArticleDetail } from '@/Services/articleService';
import { transformBlocks } from '@/utils/utilitiesHandling';
import DetailArtSection from './DetailArtSection';
import ArtRelatedFoot from './ArtRelatedFoot';
import SEO from '@/components/Seo';

const DetailPage = ({ dataServer }: { dataServer: any }) => {
  const dataLayout = dataServer?.dataSections?.BlockHead;
  const dataLayout_Foot = dataServer?.dataSections?.BlockFoot;

  const { data: dataSide_Foot } = useFetchArticleList(
    dataLayout_Foot?.BlockFoot_Side,
    1
  );
  const { data: dataSide } = useFetchArticleList(dataLayout?.BlockHead_Side, 5);
  const { data: dataCate } = useFetchCategory(
    dataServer?.dataDetail?.alterCateIds[0]
  );
  return (
    <MainLayout>
      {dataServer?.dataDetail && (
        <SEO
          title={dataServer?.dataDetail?.title}
          description={dataServer?.dataDetail?.sapo}
          image={
            dataServer?.dataDetail?.featuredMedia?.resolutions?.medium
              ?.uridataArticle?.featuredImage
          }
        />
      )}
      <Container>
        <GridWrapper>
          <div className="col-span-9">
            <SectionTitle
              // title={dataLayout?.BlockHead_Side?.title || 'hoat dong'}
              title={dataServer?.dataCate?.name}
              className="mb-5"
            />
            <DetailArtSection
              dataCate={dataCate}
              dataDetail={dataServer?.dataDetail}
            />
            <ArtRelatedFoot dataArticle={dataSide_Foot && dataSide_Foot[0]} />
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

export default DetailPage;
export const getStaticPaths = async () => {
  return {
    paths: [],
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
    if (!res) {
      throw new Error('Failed to fetch');
    }
    const posts = await res?.json();
    const dataTerm = posts?.result?.blocks;
    const dataSections = dataTerm && transformBlocks(dataTerm);
    const dataDetail =
      params?.alias && (await fetchServerArticleDetail(params?.alias));
    const dataServer = {
      dataSections: dataSections,
      dataDetail: dataDetail,
    };
    return {
      props: { dataServer },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { dataServer: {} },
    };
  }
}
