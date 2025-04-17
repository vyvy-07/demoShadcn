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
import HomeQ from '@/components/Page/HomePage/HomeQ';
import type { Article } from '@/interface/propsGlobal';
import { fetchServerArticleList } from '@/Services/articleService';
import { fetchServerCategoryList } from '@/Services/categoryService';
import { transformBlocks } from '@/utils/utilitiesHandling';
import React, { useEffect, useState } from 'react';

export default function Home({ dataServer }: any) {
  const [data, setData] = React.useState([]);
  if (!dataServer?.layoutPage) {
    return null;
  }
  const sections = dataServer?.dataSectionlayout;
  useEffect(() => {
    const getArticle = async () => {
      const dataSectionA_Main = await fetchServerArticleList(
        dataServer?.dataSectionlayout?.HomeL?.HomeL_Main,
        10
      );
      setData(dataSectionA_Main);
    };
    getArticle();
  }, []);
  return (
    <MainLayout dataCategory={dataServer?.dataCate}>
      <Container>
        <HomeA
          posts={dataServer?.dataSectionA_Main}
          postsSide={dataServer?.dataSectionA_Side}
          dataLayoutMain={sections?.HomeA?.HomeA_amain}
          dataLayoutSide={sections?.HomeA?.HomeA_amain}
        />

        <HomeB
          posts={dataServer?.dataSectionB_Main}
          dataLayoutMain={sections?.HomeB?.HomeB_Main}
        />
        <HomeC
          posts={dataServer?.dataSectionA_Main}
          dataLayoutMain={sections?.HomeC?.HomeC_Main}
          dataLayoutSide={sections?.HomeC?.HomeC_Side}
        />
        <HomeD posts={dataServer?.dataSectionC_Main} />
        <HomeC
          posts={dataServer?.dataSectionA_Main}
          dataLayoutMain={sections?.HomeD?.HomeD_Main}
          dataLayoutSide={sections?.HomeD?.HomeD_Side}
        />
        <HomeE posts={dataServer?.dataSectionA_Main} />

        <HomeC
          posts={dataServer?.dataSectionA_Main}
          dataLayoutMain={sections?.HomeE?.HomeE_Main}
          dataLayoutSide={sections?.HomeE?.HomeE_Side}
        />

        <HomeF
          posts={dataServer?.dataSectionA_Main}
          dataLayoutMain={sections?.HomeE?.HomeE_Main}
          dataLayoutSide={sections?.HomeE?.HomeE_Side}
        />
        <HomeG posts={dataServer?.dataSectionA_Side} />
        <HomeH posts={dataServer?.dataSectionD_Main} />
        <HomeI posts={dataServer?.dataSectionA_Main} />
        <HomeK posts={dataServer?.dataSectionD_Main} />
      </Container>
      <HomeL posts={data} />
      <Container>
        <HomeM posts={dataServer?.dataSectionA_Main} />
        <HomeN posts={dataServer?.dataSectionA_Main} />
        <HomeO posts={dataServer?.dataSectionA_Main} />
        <HomeP posts={dataServer?.dataSectionD_Main} />
      </Container>
      <HomeQ
        posts={dataServer?.dataSectionC_Main}
        dataSectionHomeJ_2={dataServer?.dataSectionA_Main}
        dataSectionHomeJ_3={dataServer?.dataSectionD_Main}
      />
    </MainLayout>
  );
}
export async function getStaticProps() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NTV_BASE_URL}/public/layout/HomePage`
      // { signal: controller.signal }
    );
    // clearTimeout(timeout);
    if (!res?.ok) {
      throw new Error('Failed to fetch');
    }
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
    const dataSectionC_Main = await fetchServerArticleList(
      dataSections?.HomeC?.HomeC_Side,
      5
    );
    const dataSectionD_Main = await fetchServerArticleList(
      dataSections?.HomeD?.HomeD_Side,
      5
    );

    const dataServer = {
      layoutPage: posts?.result,
      dataSectionA_Main: dataSectionA_Main,
      dataSectionA_Side: dataSectionA_Side,
      dataCate: resCate,
      dataSectionlayout: dataSections,
      dataSectionB_Main: dataSectionB_Main,
      dataSectionC_Main: dataSectionC_Main,
      dataSectionD_Main: dataSectionD_Main,
    };

    return {
      props: {
        dataServer: dataServer,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { dataServer: [] }, // Or fallback
    };
  }
}
