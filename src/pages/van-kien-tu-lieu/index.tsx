import Container from '@/components/Container/Container';
import MainLayout from '@/components/MainLayout';
import SectionTitle from '@/components/SectionTitle';
import { useFetchCategory } from '@/hooks/useCategory';
import { useFetchCateDocxList } from '@/hooks/useDocx';
import { transformBlocks } from '@/utils/utilitiesHandling';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import styled from 'styled-components';
import TableDocx from './TableDocx';
import { fetchDocxList } from '@/Services/docx';
const Button = styled.button`
  max-width: 300px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: 1px solid var(--color-grey);
  padding: 10px;
  width: 100%;
  text-transform: uppercase;
`;
const DocxPage = () => {
  const [tabCurrent, setTabCurrent] = useState('trung-uong');
  const listTab = useFetchCateDocxList()?.data;
  const route = useRouter();
  const path = usePathname();
  const dataCate = path && useFetchCategory(path)?.data;
  return (
    <MainLayout>
      <Container>
        <SectionTitle title={dataCate?.name} className="mb-5" />
        <div className="">
          {listTab &&
            listTab?.map((item: any) => {
              return <Button>{item?.name}</Button>;
            })}
        </div>
        <TableDocx />
      </Container>
    </MainLayout>
  );
};

export default DocxPage;
export async function getStaticProps() {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 7000);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NTV_BASE_URL}/public/layout/VideoCatePage`,
      { signal: controller.signal }
    );
    clearTimeout(timeout);
    if (!res) {
      throw new Error('Failed to fetch');
    }
    const posts = await res?.json();
    const dataTerm = posts?.result?.blocks;
    const dataSections = dataTerm && transformBlocks(dataTerm);

    const params = { limit: 10, skip: 0 };

    const listDocx = await fetchDocxList({ params });
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
