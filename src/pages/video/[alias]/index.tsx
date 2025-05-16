import Container from '@/components/Container/Container';
import MainLayout from '@/components/MainLayout';
import { fetchServerArticleDetail } from '@/Services/articleService';
import { fetchDetailArticle } from '@/Services/ClientServices/article';
import { transformBlocks } from '@/utils/utilitiesHandling';
import React from 'react';

const DetailViewpPage = ({ dataServer }: { dataServer: any }) => {
  return (
    <MainLayout>
      <Container>
        <h1 className="heading-2"> {dataServer?.dataDetail?.title}</h1>
        <h2 className="body-1"> {dataServer?.dataDetail?.sapo}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: dataServer?.dataDetail?.postContent,
          }}
        ></div>
      </Container>
    </MainLayout>
  );
};

export default DetailViewpPage;
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
export async function getStaticProps({
  params,
}: {
  params: { alias: string };
}) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 7000);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_VL_BASE_URL}/public/layout/VideoDetailPage`,
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
      props: { dataServer: {} }, // Or fallback
    };
  }
}
