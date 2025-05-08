import Container from '@/components/Container/Container';
import MainLayout from '@/components/MainLayout';
import { fetchServerArticleDetail } from '@/Services/articleService';
import { useFetchMediaById } from '@/Services/ClientServices/media';
import { fetchLayoutPage } from '@/Services/layoutPage';
import { transformBlocks } from '@/utils/utilitiesHandling';
import type { GetStaticPaths } from 'next';
import ReactPlayer from 'react-player';

const DetailVideoPage = ({ dataServer }: { dataServer: any }) => {
  const dataArticle = dataServer?.dataArticle;
  const dataVideo =
    dataArticle?.postMedia?.[0]?.file &&
    useFetchMediaById(dataArticle?.postMedia?.[0]?.file);
  const urlVideo = 'www.youtube.com/embed/CJ6hij46oxA';

  return (
    <MainLayout>
      <Container>
        {dataVideo?.data && (
          <div>
            <div>
              <ReactPlayer
                url={urlVideo}
                style={{ aspectRatio: '16/9' }}
                width="100%"
                height="100%"
                controls
              />
            </div>
          </div>
        )}
        <div></div>
      </Container>
    </MainLayout>
  );
};

export default DetailVideoPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};
export async function getStaticProps({
  params,
}: {
  params: { alias: string };
}) {
  try {
    const datalayout = await fetchLayoutPage('video-page');
    const dataArticle =
      params?.alias && (await fetchServerArticleDetail(params?.alias));
    const dataTerm = datalayout?.result?.blocks;
    const dataSections = transformBlocks(dataTerm);
    const dataServer = {
      dataSections: dataSections,
      dataArticle: dataArticle,
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
