import Container from '@/components/Container/Container';
import MainLayout from '@/components/MainLayout';
import SectionTitle from '@/components/SectionTitle';
import { useFetchCategory } from '@/hooks/useCategory';
import { useFetchCateDocxList } from '@/hooks/useDocx';
import { fetchDocxList } from '@/Services/docx';
import { transformBlocks } from '@/utils/utilitiesHandling';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import TableGroup from './TableGroup';
const Button = styled.button`
  max-width: 300px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: 1px solid var(--color-grey-bold);
  padding: 5px;
  width: 100%;
  text-transform: uppercase;
`;
const DocxPage = () => {
  const [idTabCurrent, setIdTabCurrent] = useState('');
  const { data: listCateDocx, error } = useFetchCateDocxList();
  const [listDocx, setListDocx] = useState([]);
  const path = usePathname() || '';
  const { data: dataCate } = useFetchCategory(path);
  useEffect(() => {
    const valueIdTabcurrent = () => {
      if (listCateDocx && !idTabCurrent) {
        setIdTabCurrent(listCateDocx[0]?.id);
      }
    };
    valueIdTabcurrent();
  }, [listCateDocx]);
  useEffect(() => {
    const getlistDocx = async () => {
      try {
        const payload = {
          limit: -1,
          skip: 0,
          categoryId: idTabCurrent,
        };
        if (idTabCurrent) {
          const data = await fetchDocxList(payload);
          setListDocx(data);
        }
      } catch (error) {
        console.log('error :>> ', error);
      }
    };
    getlistDocx();
  }, [idTabCurrent]);
  return (
    <MainLayout>
      <Container>
        <SectionTitle title={dataCate?.name} className="mb-5" />
        <div className="">
          {listCateDocx &&
            listCateDocx?.map((item: any, index: number) => {
              return (
                <Button
                  onClick={() => setIdTabCurrent(item?.id)}
                  className={`cursor-pointer heading-4 py-[5px] uppercase transition-[0.3s] ${
                    idTabCurrent == item?.id
                      ? 'bg-white text-red-primary transition-[0.3s]'
                      : 'bg-grey-hover text-grey-bold'
                  }`}
                  key={item?.id || index}
                >
                  {item?.name}
                </Button>
              );
            })}
        </div>
        {listDocx && <TableGroup posts={listDocx} />}
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
      `${process.env.NEXT_PUBLIC_VL_BASE_URL}/public/layout/VideoCatePage`,
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

    // const listDocx = await fetchDocxList({ params });
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
