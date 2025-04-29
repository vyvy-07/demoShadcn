import MainLayout from '@/components/MainLayout';
import { fetchServerArticleList } from '@/Services/articleService';
import { fetchServerCategoryList } from '@/Services/categoryService';
import { transformBlocks } from '@/utils/utilitiesHandling';
import Link from 'next/link';

const NewsPage = ({ dataServer }: any) => {
  return (
    <MainLayout
      posts={dataServer?.dataCate}
      dataCategory={dataServer?.dataCate}
    >
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

export default NewsPage;
export async function getStaticProps() {
  const controller = new AbortController(); // tạo bộ điều khiển để hủy request nếu quá lâu
  const timeout = setTimeout(() => controller.abort(), 7000); // timeout 7 giây
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NTV_BASE_URL}/public/layout/HomePage`,
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
