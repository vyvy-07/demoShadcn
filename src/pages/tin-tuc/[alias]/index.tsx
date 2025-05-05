import Container from '@/components/Container/Container';
import MainLayout from '@/components/MainLayout';
import SectionTitle from '@/components/SectionTitle';
import {
  useFetchArticleList,
  useFetchRelatedArticleList,
} from '@/hooks/useArticle';
import { fetchServerArticleList } from '@/Services/articleService';
import { fetchServerCategoryList } from '@/Services/categoryService';
import { fetchLayoutPage } from '@/Services/layoutPage';
import { transformBlocks } from '@/utils/utilitiesHandling';
import Link from 'next/link';

const CatePage = ({ dataServer }: any) => {
  const { data: dataPosts } = useFetchRelatedArticleList({}, 5);
  console.log('object :>> ', dataPosts);
  return (
    <MainLayout
      posts={dataServer?.dataCate}
      dataCategory={dataServer?.dataCate}
    >
      <Container>
        <SectionTitle title="Cate Page" />
        {dataServer?.dataSectionB_Main &&
          dataServer?.dataSectionB_Main?.map((item: any) => {
            return (
              <li key={item?.id} className="block p-1 cursor-pointer">
                <Link href={`/tin-tuc/${item?.alias}`}>{item?.title}</Link>
              </li>
            );
          })}
      </Container>
    </MainLayout>
  );
};

export default CatePage;
export const getStaticPaths = async () => {
  const dataCate = await fetchServerCategoryList();
  const paths = dataCate?.map((post: any) => {
    return { params: { alias: post?.alias.toString() } };
  });
  return {
    paths: paths || [],
    fallback: true, // false or "blocking"
  };
};

export async function getStaticProps({ params }: any) {
  const datalayout = await fetchLayoutPage('category');
  // console.log('datalayout :>> ', datalayout);
  try {
    return {
      props: {},
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { dataServer: [] }, // Or fallback
    };
  }
}
