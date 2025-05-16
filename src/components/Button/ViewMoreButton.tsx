import { useFetchArticleList } from '@/hooks/useArticle';
import { useState } from 'react';

const ViewMoreButton = ({ dataLayout }: { dataLayout: any }) => {
  const [limited, setLimited] = useState(3);
  const { data: dataSide } = useFetchArticleList(dataLayout, limited);
  return (
    <div
      onClick={() => {
        setLimited(limited + 4);
      }}
      className="flex justify-between items-center"
    >
      <hr className="block flex-1 text-grey" />
      <p className="block p-3 w-[100px] font-bold text-grey-bold ">Xem thêm</p>
      <hr className="block flex-1 text-grey" />
    </div>
  );
};

export default ViewMoreButton;
