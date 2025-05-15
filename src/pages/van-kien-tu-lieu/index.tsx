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
import { fetchServerCateDocxList } from '@/Services/categoryService';
const Button = styled.button``;
const DocxPage = ({ dataServer }: { dataServer: any }) => {
  const [idTabCurrent, setIdTabCurrent] = useState(
    dataServer?.listCateDocx[0]?.id
  );

  const [listDocx, setListDocx] = useState([]);
  const path = usePathname() || '';
  const { data: dataCate } = useFetchCategory(path);

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
          {dataServer?.listCateDocx &&
            dataServer?.listCateDocx?.map((item: any, index: number) => {
              return (
                <button
                  onClick={() => setIdTabCurrent(item?.id)}
                  className={`max-w-[300px] border-tl-[5px] border-tr-[5px] border 
                          border-grey-bold p-[5px] w-full
                            cursor-pointer heading-4 py-[5px] uppercase transition-[0.3s] 
                            ${
                              idTabCurrent == item?.id
                                ? 'bg-white text-red-primary transition-[0.3s]'
                                : 'bg-grey-hover text-grey-bold'
                            }`}
                  key={item?.id || index}
                >
                  {item?.name}
                </button>
              );
            })}
        </div>
        {listDocx && <TableGroup posts={listDocx} />}
      </Container>
    </MainLayout>
  );
};

export default DocxPage;
export async function getStaticProps({
  params,
}: {
  params: { alias: string };
}) {
  try {
    console.log('params :>> ', params);
    const listCateDocx = await fetchServerCateDocxList({});

    const dataServer = {
      listCateDocx: listCateDocx,
    };
    return {
      props: { dataServer },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { dataServer: {} }, // Or fallback
    };
  }
}
