import MainLayout from '@/components/MainLayout';
import SectionTitle from '@/components/SectionTitle';
import { useFetchArticleList } from '@/hooks/useArticle';
import { fetchServerArticleList } from '@/Services/articleService';
import { fetchServerCategoryList } from '@/Services/categoryService';
import { transformBlocks } from '@/utils/utilitiesHandling';
import Link from 'next/link';

const CatePage = ({ dataServer }: any) => {
  return (
    <MainLayout
      posts={dataServer?.dataCate}
      dataCategory={dataServer?.dataCate}
    >
      <SectionTitle title="Cate Page" />
      {dataServer?.dataSectionB_Main &&
        dataServer?.dataSectionB_Main?.map((item: any) => {
          return (
            <li key={item?.id} className="block p-1 cursor-pointer">
              <Link href={`/tin-tuc/${item?.alias}`}>{item?.title}</Link>
            </li>
          );
        })}
    </MainLayout>
  );
};

export default CatePage;
export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true, // false or "blocking"
  };
};

export async function getStaticProps() {
  const controller = new AbortController(); // tạo bộ điều khiển để hủy request nếu quá lâu
  const timeout = setTimeout(() => controller.abort(), 7000); // timeout 7 giây
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NTV_BASE_URL_LC}/api/cate-page`, // api cate
      { signal: controller.signal }
    );
    clearTimeout(timeout);
    if (!res?.ok) {
      throw new Error('Failed to fetch');
    }

    const posts = await res?.json();

    const resCate = await fetchServerCategoryList();
    const dataTerm = posts?.result?.blocks;
    const dataSections = transformBlocks(dataTerm);
    const dataSectionB_Main = await fetchServerArticleList(
      dataSections?.HomeB?.HomeB_Main,
      5
    );
    const dataServer = {
      layoutPage: posts?.result,
      dataCate: resCate,
      dataSections: dataSections,
      dataSectionB_Main: dataSectionB_Main,
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
      props: { dataServer: [] }, // Or fallback
    };
  }
}
