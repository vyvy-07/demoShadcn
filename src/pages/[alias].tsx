import React from 'react';

const DetailPage = () => {
  return <div>DetailPage</div>;
};

export default DetailPage;
export const getStaticPaths = async () => {
  // const dataCate = await fetchServerCategoryList();
  // const datapaths: any = [];
  // dataCate.forEach((element: any) => {
  //   if (!SPECIAL_PATH.includes(element.alias)) {
  //     datapaths.push({
  //       params: element,
  //     });
  //   }
  // });
  return {
    paths: [],
    fallback: 'blocking',
  };
};
export async function getStaticProps({ params }: { params: any }) {
  console.log('object :>> ', params);
  return { props: {} };
}
