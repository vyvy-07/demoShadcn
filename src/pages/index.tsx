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
import HomeO from '@/components/Page/HomePage/HomeO';
import HomeQ from '@/components/Page/HomePage/HomeQ';
import HomeR from '@/components/Page/HomePage/HomeR';
import HomeS from '@/components/Page/HomePage/HomeS';
import HomeT from '@/components/Page/HomePage/HomeT';
import { useFetchArticleList } from '@/hooks/useArticle';
import { fetchServerArticleList } from '@/Services/articleService';
import { transformBlocks } from '@/utils/utilitiesHandling';

export default function Home({ dataServer }: any) {
  if (!dataServer?.layoutPage) {
    return null;
  }

  const sections = dataServer?.dataSectionlayout;

  const { data: dataHomeD } = useFetchArticleList(
    sections?.HomeD?.HomeD_Main,
    4,
    dataServer?.layoutPage
  );
  const { data: dataHomeE } = useFetchArticleList(
    sections?.HomeE?.HomeE_Main,
    4,
    dataServer?.layoutPage
  );
  const { data: dataHomeF } = useFetchArticleList(
    sections?.HomeF?.HomeF_Main,
    8,
    dataServer?.layoutPage
  );

  const { data: dataHomeG } = useFetchArticleList(
    sections?.HomeG?.HomeG_Main,
    16,
    dataServer?.layoutPage
  );
  const { data: dataHomeH } = useFetchArticleList(
    sections?.HomeH?.HomeH_Main,
    5,
    dataServer?.layoutPage
  );
  const { data: dataHomeI } = useFetchArticleList(
    sections?.HomeI?.HomeI_Main,
    5,
    dataServer?.layoutPage
  );
  const { data: dataHomeJ1 } = useFetchArticleList(
    sections?.HomeJ?.HomeJ_1,
    12,
    dataServer?.layoutPage
  );
  const { data: dataHomeJ2 } = useFetchArticleList(
    sections?.HomeJ?.HomeJ_2,
    12,
    dataServer?.layoutPage
  );
  const { data: dataHomeJ3 } = useFetchArticleList(
    sections?.HomeJ?.HomeJ_3,
    12,
    dataServer?.layoutPage
  );

  const { data: dataHomeK } = useFetchArticleList(
    sections?.HomeK?.HomeK_Main,
    12,
    dataServer?.layoutPage
  );

  const { data: dataHomeL } = useFetchArticleList(
    sections?.HomeL?.HomeL_Main,
    4,
    dataServer?.layoutPage
  );
  const { data: dataHomeM } = useFetchArticleList(
    sections?.HomeM?.HomeM_Main,
    16,
    dataServer?.layoutPage
  );
  const { data: dataHomeN } = useFetchArticleList(
    sections?.HomeN?.HomeN_Main,
    8,
    dataServer?.layoutPage
  );
  const { data: dataHomeO } = useFetchArticleList(
    sections?.HomeO?.HomeO_Main,
    8,
    dataServer?.layoutPage
  );
  const { data: dataHomeP } = useFetchArticleList(
    sections?.HomeP?.HomeP_Main,
    8,
    dataServer?.layoutPage
  );

  return (
    <MainLayout>
      <Container>
        <HomeA
          posts={dataServer?.dataSectionA_Main}
          postsSide={dataServer?.dataSectionA_Side}
          dataLayoutMain={sections?.HomeA?.HomeA_main}
          dataLayoutSide={sections?.HomeA?.HomeA_Side}
        />
        <HomeB
          posts={dataServer?.dataSectionB_Main}
          dataLayoutMain={sections?.HomeB?.HomeB_Main}
        />
        <HomeC
          posts={dataServer?.dataSectionC_Main}
          dataLayoutMain={sections?.HomeC?.HomeC_Main}
          dataLayoutSide={sections?.HomeC?.HomeC_Side}
        />
        {/* Lanh dao dang */}
        <HomeD />
        <HomeC
          posts={dataHomeD}
          dataLayoutMain={sections?.HomeD?.HomeD_Main}
          dataLayoutSide={sections?.HomeD?.HomeD_Side}
        />
        {/* Lanh dao nha nuoc */}
        <HomeE posts={dataServer?.dataSectionA_Main} />
        <HomeC
          posts={dataHomeE}
          dataLayoutMain={sections?.HomeE?.HomeE_Main}
          dataLayoutSide={sections?.HomeE?.HomeE_Side}
        />
        <HomeF
          posts={dataHomeF}
          dataLayoutMain={sections?.HomeF?.HomeF_Main}
          dataLayoutSide={sections?.HomeF?.HomeF_Side}
        />
        <HomeG
          posts={dataHomeG}
          dataLayoutMain={sections?.HomeG?.HomeG_Main}
          dataLayoutSide={sections?.HomeG?.HomeG_Side}
        />
        <HomeH
          posts={dataHomeH}
          dataLayoutMain={sections?.HomeH?.HomeH_Main}
          dataLayoutSide={sections?.HomeH?.HomeH_Side}
        />
        <HomeI posts={dataHomeI} />
        <HomeK
          posts={dataHomeJ1}
          dataHomeJ2={dataHomeJ2}
          dataHomeJ3={dataHomeJ3}
        />
      </Container>
      <HomeL posts={dataHomeK} dataLayoutMain={sections?.HomeK?.HomeK_Main} />
      <Container>
        <HomeM posts={dataHomeL} />
        <HomeG
          posts={dataHomeM}
          dataLayoutMain={sections?.HomeG?.HomeG_Main}
          dataLayoutSide={sections?.HomeG?.HomeG_Side}
        />
        <HomeC posts={dataHomeP} />
        <HomeO posts={dataHomeN} />
        {/* <HomeP posts={dataHomeO} /> */}
        <HomeK
          posts={dataHomeJ1}
          dataHomeJ2={dataHomeJ2}
          dataHomeJ3={dataHomeJ3}
        />
      </Container>
      {/* //giống HomeK */}
      <HomeQ
        posts={dataHomeJ1}
        dataHomeJ2={dataHomeJ2}
        dataHomeJ3={dataHomeJ3}
      />
      <Container>
        {/* 
TƯ LIỆU - VĂN KIỆN ĐẢNG code cứng */}
        <HomeR />
        <HomeS posts={dataHomeP} />
        <HomeT />
      </Container>
    </MainLayout>
  );
}
export async function getStaticProps() {
  const controller = new AbortController(); // tạo bộ điều khiển để hủy request nếu quá lâu
  const timeout = setTimeout(() => controller.abort(), 7000); // timeout 7 giây
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NTV_BASE_URL}/public/layout/VideoCatePage`, // api homepage
      { signal: controller.signal }
    );
    clearTimeout(timeout);
    if (!res?.ok) {
      throw new Error('Failed to fetch home page');
    }
    // const resCate = await fetchServerCategoryList();
    // const resCate: any = [];
    const posts = await res?.json();

    const dataTerm = posts?.result?.blocks;
    const dataSections = transformBlocks(dataTerm);
    const dataSectionA_Main =
      dataSections?.HomeA?.HomeA_Main &&
      (await fetchServerArticleList(dataSections?.HomeA?.HomeA_Main, 5));
    const dataSectionA_Side =
      dataSections?.HomeA?.HomeA_Side &&
      (await fetchServerArticleList(dataSections?.HomeA?.HomeA_Side, 5));
    const dataSectionB_Main =
      dataSections?.HomeB?.HomeB_Main &&
      (await fetchServerArticleList(dataSections?.HomeB?.HomeB_Main, 5));
    const dataSectionC_Main =
      dataSections?.HomeC?.HomeC_Main &&
      (await fetchServerArticleList(dataSections?.HomeC?.HomeC_Main, 5));

    const dataServer = {
      layoutPage: posts?.result,
      dataSectionA_Main: dataSectionA_Main,
      dataSectionA_Side: dataSectionA_Side,

      dataSectionlayout: dataSections,
      dataSectionB_Main: dataSectionB_Main,
      dataSectionC_Main: dataSectionC_Main,
    };
    return {
      props: {
        dataServer: dataServer,
      },
      revalidate: 60,
    };
  } catch (error) {
    // clearTimeout(timeout);

    console.error('Error fetching data:', error);
    return {
      props: {
        dataServer: [],
      }, // Or fallback
    };
  }
}
