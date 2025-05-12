import Container from '@/components/Container/Container';
import DetailPageLayout from '@/components/DetailPageLayout';
import SectionTitle from '@/components/SectionTitle';
import { CONTENT_INTRO_PAGE } from '@/constant/dataVinhLong/gioi-thieu';
import { useFetchArticleList } from '@/hooks/useArticle';
import { fetchLayoutPage } from '@/Services/layoutPage';
import { transformBlocks } from '@/utils/utilitiesHandling';

const IntroPage = ({ dataServer }: { dataServer: any }) => {
  // if (!dataServer?.dataSections) {
  //   console.log('chưa có layout trang chi tiết :>> ', 1);
  // }
  // const head = dataServer?.dataSections?.DetailHead;
  // const detailHead_Side = useFetchArticleList(head?.DetailHead_Side, 5);
  return (
    <DetailPageLayout>
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
// export async function getStaticProps() {
//   try {
//     const datalayout = await fetchLayoutPage('cate-page');
//     if (!datalayout) {
//       throw new Error('Failed to fetch');
//     }
//     const dataTerm = datalayout?.result?.blocks;
//     const dataSections = transformBlocks(dataTerm);
//     const dataServer = {
//       dataSections: dataSections,
//     };

//     return {
//       props: { dataServer },
//       revalidate: 60,
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return {
//       props: { dataServer: [] }, // Or fallback
//     };
//   }
// }
