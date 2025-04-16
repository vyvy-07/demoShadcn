import Container from '@/components/Container/Container';
import HomeA from '@/components/Page/HomePage/HomeA';
import { fetchServerArticleList } from '@/Services/articleService';
import { fetchServerCategoryList } from '@/Services/categoryService';
import { transformBlocks } from '@/utils/utilitiesHandling';
import HomeB from '@/components/Page/HomePage/HomeB';
import HomeC from '@/components/Page/HomePage/HomeC';
import HomeD from '@/components/Page/HomePage/HomeD';
import HomeE from '@/components/Page/HomePage/HomeE';
import HomeF from '@/components/Page/HomePage/HomeF';
import HomeG from '@/components/Page/HomePage/HomeG';
import HomeH from '@/components/Page/HomePage/HomeH';
import MainLayout from '@/components/MainLayout';
import { useEffect } from 'react';

export default function Home({
  layoutPage,
  dataSectionA_Main,
  dataSectionA_Side,
  dataCate,
  dataSectionlayout,
}: any) {
  if (!layoutPage) {
    return null;
  }
  useEffect(() => {
    const getArticle = async () => {
      try {
        const dataSectionA_Main = await fetchServerArticleList(
          dataSectionlayout?.HomeA?.HomeA_Main,
          5
        );
        console.log('ccc :>> ', dataSectionA_Main);
      } catch (error) {
        console.log('error :>> ', error);
      }
    };
    getArticle();
  }, []);

  return (
    <Container>
      <MainLayout dataCategory={dataCate}>
        <HomeA posts={dataSectionA_Main} postsSide={dataSectionA_Side} />
        <HomeB posts={dataSectionA_Main} />
        <HomeC posts={dataSectionA_Main} />
        <HomeD posts={dataSectionA_Main} />
        <HomeC posts={dataSectionA_Main} />
        <HomeE posts={dataSectionA_Main} />
        <HomeC posts={dataSectionA_Main} />
        <HomeF posts={dataSectionA_Main} />
        <HomeG posts={dataSectionA_Main} />
        <HomeH posts={dataSectionA_Main} />
      </MainLayout>
    </Container>
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
      dataSections?.HomeA?.HomeA_Side,
      5
    );
    if (!res) {
      throw new Error('Failed to fetch');
    }
    return {
      props: {
        layoutPage: posts?.result,
        dataSectionA_Main: dataSectionA_Main,
        dataSectionA_Side: dataSectionA_Side,
        dataCate: resCate,
        dataSectionlayout: dataSections,
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
