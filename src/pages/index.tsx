import Container from '@/components/Container/Container';
import MainLayout from '@/components/MainLayout';
import HomeA from '@/components/Page/HomePage/HomeA';
import HomeB from '@/components/Page/HomePage/HomeB';
import HomeC from '@/components/Page/HomePage/HomeC';
import HomeD from '@/components/Page/HomePage/HomeD';
import HomeE from '@/components/Page/HomePage/HomeE';
import HomeF from '@/components/Page/HomePage/HomeF';
import HomeG from '@/components/Page/HomePage/HomeG';
import HomeH from '@/components/Page/HomePage/HomeH';
import HomeI from '@/components/Page/HomePage/HomeI';
import HomeK from '@/components/Page/HomePage/HomeK';
import HomeL from '@/components/Page/HomePage/HomeL';
import HomeM from '@/components/Page/HomePage/HomeM';
import HomeN from '@/components/Page/HomePage/HomeN';
import HomeO from '@/components/Page/HomePage/HomeO';
import HomeP from '@/components/Page/HomePage/HomeP';
import type { Article } from '@/interface/propsGlobal';
import { fetchServerArticleList } from '@/Services/articleService';
import { fetchServerCategoryList } from '@/Services/categoryService';
import { transformBlocks } from '@/utils/utilitiesHandling';
import { useEffect, useState } from 'react';

export default function Home({ dataServer }: any) {
  const [data, setData] = useState<Article[]>([]);
  if (!dataServer?.layoutPage) {
    return null;
  }
  useEffect(() => {
    const getArticle = async () => {
      try {
        const dataSectionA_Main = await fetchServerArticleList(
          dataServer?.dataSectionlayout?.HomeL?.HomeL_Main,
          10
        );
        setData(dataSectionA_Main);
      } catch (error) {
        console.log('error :>> ', error);
      }
    };
    getArticle();
  }, []);

  return (
    <MainLayout dataCategory={dataServer?.dataCate}>
      <Container>
        <HomeA
          posts={dataServer?.dataSectionA_Main}
          postsSide={dataServer?.dataSectionA_Side}
        />
        <HomeB posts={dataServer?.dataSectionB_Main} />
        <HomeC posts={dataServer?.dataSectionA_Main} />
        <HomeD posts={dataServer?.dataSectionA_Main} />
        <HomeC posts={dataServer?.dataSectionA_Main} />
        <HomeE posts={dataServer?.dataSectionA_Main} />
        <HomeC posts={dataServer?.dataSectionA_Main} />
        <HomeF posts={dataServer?.dataSectionA_Main} />
        <HomeG posts={dataServer?.dataSectionA_Main} />
        <HomeH posts={dataServer?.dataSectionA_Main} />
        <HomeI posts={dataServer?.dataSectionA_Main} />
        <HomeK posts={dataServer?.dataSectionA_Main} />
      </Container>
      <HomeL posts={data} />
      <Container>
        <HomeM posts={dataServer?.dataSectionA_Main} />
        <HomeN posts={dataServer?.dataSectionA_Main} />
        <HomeO posts={dataServer?.dataSectionA_Main} />
        <HomeP posts={dataServer?.dataSectionA_Main} />
      </Container>
    </MainLayout>
  );
}
export async function getStaticProps() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NTV_BASE_URL}/public/layout/HomePage
  `
    );
    const resCate = await fetchServerCategoryList();
    const posts = await res?.json();

    const dataTerm = posts?.result?.blocks;
    const dataSections = transformBlocks(dataTerm);
    const dataSectionA_Main = await fetchServerArticleList(
      dataSections?.HomeA?.HomeA_Main,
      5
    );
    const dataSectionA_Side = await fetchServerArticleList(
      dataSections?.HomeA?.HomeA_Main,
      5
    );
    const dataSectionB_Main = await fetchServerArticleList(
      dataSections?.HomeB?.HomeB_Main,
      5
    );
    const dataSectionB_Side = await fetchServerArticleList(
      dataSections?.HomeB?.HomeB_Side,
      5
    );
    const dataServer = {
      layoutPage: posts?.result,
      dataSectionA_Main: dataSectionA_Main,
      dataSectionA_Side: dataSectionA_Side,
      dataCate: resCate,
      dataSectionlayout: dataSections,
      dataSectionB_Main: dataSectionB_Main,
    };
    if (!res) {
      throw new Error('Failed to fetch');
    }
    return {
      props: {
        dataServer: dataServer,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { data: null }, // Or fallback
    };
  }
}
