import VideoCard from '@/components/Articles/VideoCard';
import Container from '@/components/Container/Container';
import GridWrapper from '@/components/LayoutGrid/GridWrapper';
import MainLayout from '@/components/MainLayout';
import SectionTitle from '@/components/SectionTitle';
import { useFetchArticleList } from '@/hooks/useArticle';
import type { Article } from '@/interface/propsGlobal';
import { fetchLayoutPage } from '@/Services/layoutPage';
import { transformBlocks } from '@/utils/utilitiesHandling';

const VideoPage = ({ dataServer }: { dataServer: any }) => {
  if (!dataServer?.dataSections) {
    return null;
  }
  const videoHead = dataServer?.dataSections?.VideoHead;
  const detailHead_Side = useFetchArticleList(videoHead?.BlockHead_Main, 10);
  return (
    <MainLayout>
      <Container>
        <SectionTitle
          title={videoHead?.BlockHead_Main?.title}
          className="mb-5"
        />
        <GridWrapper className="mb-5">
          {detailHead_Side?.data &&
            detailHead_Side?.data
              ?.slice(0, 2)
              .map((item: Article, index: number) => {
                return (
                  <div key={item?.id || index} className="col-span-6">
                    <VideoCard
                      dataArticle={item}
                      width={286}
                      height={162}
                      hasSapo={true}
                      hasCate={true}
                      iconType="align"
                      hasDate={true}
                      sapoStyle="line-clamp-3"
                      titleStyle="heading-3"
                    />
                  </div>
                );
              })}
        </GridWrapper>
        <GridWrapper>
          {detailHead_Side?.data &&
            detailHead_Side?.data
              ?.slice(2, detailHead_Side?.data?.length)
              .map((item: Article, index: number) => {
                return (
                  <div key={item?.id || index} className="col-span-3">
                    <VideoCard
                      subtitleStyle="body-2 text-grey"
                      dataArticle={item}
                      width={286}
                      height={162}
                      hasSapo={false}
                      hasCate={true}
                      className="col-span-3"
                      hasDate={true}
                      titleStyle="heading-3"
                    />
                  </div>
                );
              })}
        </GridWrapper>
      </Container>
    </MainLayout>
  );
};

export default VideoPage;
export async function getStaticProps() {
  try {
    const datalayout = await fetchLayoutPage('VideoCatePage');
    if (!datalayout) {
      throw new Error('Failed to fetch');
    }
    const dataTerm = datalayout?.result?.blocks;
    const dataSections = transformBlocks(dataTerm);
    const dataServer = {
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
