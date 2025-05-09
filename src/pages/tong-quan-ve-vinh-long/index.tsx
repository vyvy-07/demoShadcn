import Container from '@/components/Container/Container';
import DetailPageLayout from '@/components/DetailPageLayout';
import SectionTitle from '@/components/SectionTitle';
import { CONTENT_INTRO_PAGE } from '@/constant/dataVinhLong/gioi-thieu';
import { useFetchArticleList } from '@/hooks/useArticle';
import { fetchLayoutPage } from '@/Services/layoutPage';
import { transformBlocks } from '@/utils/utilitiesHandling';

const IntroPage = ({ dataServer }: { dataServer: any }) => {
  if (!dataServer?.dataSections) {
    return null;
  }
  const head = dataServer?.dataSections?.DetailHead;
  const detailHead_Side = useFetchArticleList(head?.DetailHead_Side, 5);
  return (
    <DetailPageLayout
      posts={detailHead_Side?.data}
      titleSide={head?.DetailHead_Side?.title}
    >
      <Container>
        <SectionTitle
          title="Giới thiệu tổng quan về Vĩnh Long"
          lineUnderTitle={true}
          className="py-5"
        />
        <div dangerouslySetInnerHTML={{ __html: CONTENT_INTRO_PAGE }}></div>
      </Container>
    </DetailPageLayout>
  );
};

export default IntroPage;
export async function getStaticProps() {
  const controller = new AbortController(); // tạo bộ điều khiển để hủy request nếu quá lâu
  const timeout = setTimeout(() => controller.abort(), 7000); // timeout 7 giây
  try {
    const datalayout = await fetch(
      `${process.env.NEXT_PUBLIC_NTV_BASE_URL_LC}/api/detail-page`, // api cate
      { signal: controller.signal }
    );
    clearTimeout(timeout);
    if (!datalayout?.ok) {
      throw new Error('Failed to fetch');
    }
    const posts = await datalayout?.json();
    // const datalayout = await fetchLayoutPage('detail-page');
    const dataTerm = posts?.result?.blocks;
    const dataSections = transformBlocks(dataTerm);
    const dataServer = {
      dataSections: dataSections,
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
