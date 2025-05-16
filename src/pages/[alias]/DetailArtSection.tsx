import ShareSocial from '@/components/ShareSocial';
import type { Category } from '@/interface/category';
import type { Article } from '@/interface/propsGlobal';
import { formatArticleDate } from '@/utils/Format';
import React from 'react';

const DetailArtSection = ({
  dataDetail,
  dataCate,
}: {
  dataDetail: Article;
  dataCate: Category;
}) => {
  return (
    <div>
      <div>
        <p className="heading-4 uppercase">{dataCate?.name}</p>
        <h1 className="title-main py-3">{dataDetail?.title}</h1>

        <div className={`flex body-3 font-normal items-center`}>
          <div>{dataDetail?.penName || dataDetail?.external}</div>
          <div className="dot w-2 h-2 mx-3 bg-black"></div>
          <div className={''}>
            {dataDetail?.publicationTime &&
              formatArticleDate(dataDetail?.publicationTime)}
          </div>
        </div>
      </div>
      <ShareSocial className="my-3" />
      <hr className="text-grey-bold mb-3" />
      <div>
        <h2 className="heading-3 mb-[10px]">{dataDetail?.sapo}</h2>
        <div
          className="body-1 font-roboto"
          dangerouslySetInnerHTML={{ __html: dataDetail?.postContent || '' }}
        ></div>
      </div>
    </div>
  );
};

export default DetailArtSection;
