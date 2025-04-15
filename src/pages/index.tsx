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

export default function Home({
  layoutPage,
  dataSectionA_Main,
  dataSectionA_Side,
  dataCate,
}: any) {
  if (!layoutPage) {
    return null;
  }
  console.log('layoutPage :>> ', layoutPage);
  return (
    <Container>
      <MainLayout dataCategory={dataCate}>
        <HomeA posts={dataSectionA_Main} postsSide={dataSectionA_Side} />
        {/* <HomeB posts={dataSectionA} />
        <HomeC posts={dataSectionA} />
        <HomeD posts={dataSectionA} />
        <HomeC posts={dataSectionA} />
        <HomeE posts={dataSectionA} />
        <HomeC posts={dataSectionA} />
        <HomeF posts={dataSectionA} />
        <HomeG posts={dataSectionA} />
        <HomeH posts={dataSectionA} /> */}
      </MainLayout>
    </Container>
  );
}
export async function getStaticProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_NTV_BASE_URL_LC}/api/HomePage`
  );
  const resCate = await fetchServerCategoryList();
  const posts = await res?.json();
  const dataTerm = posts?.result?.blocks;
  const result = transformBlocks(dataTerm);
  const dataSectionA_Main = await fetchServerArticleList(
    result?.HomeA?.HomeA_Main,
    5
  );
  const dataSectionA_Side = await fetchServerArticleList(
    result?.HomeA?.HomeA_Side,
    5
  );
  console.log('resCate :>> ', resCate);
  return {
    props: {
      layoutPage: posts?.result,
      dataSectionA_Main: dataSectionA_Main,
      dataSectionA_Side: dataSectionA_Side,
      dataCate: resCate,
    },
    revalidate: 60,
  };
}
