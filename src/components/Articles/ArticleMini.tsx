import type { PropsGlobal } from '@/interface/articleProps';
import React from 'react';

const ArticleMini = ({ dataArticle, className }: PropsGlobal) => {
  const url =
    'https://api.nongthonviet.com.vn/media/2025/04/09/67f629249f9c5248f66aea69_tang-truong-kinh-te-tphcm_medium.jpg';

  return (
    <div className={`${className} flex items-start gap-5`}>
      <div className=" w-[60px] h-[60px]">
        <img
          className="w-full h-full object-cover"
          src={
            dataArticle?.featuredMedia?.resolutions?.medium?.uri ||
            dataArticle?.featuredImage ||
            url
          }
          alt={dataArticle?.featuredMedia?.alt}
        />
      </div>
      <div className="flex-1 ">
        <h5 className="body-2">{dataArticle?.title}</h5>
      </div>
    </div>
  );
};

export default ArticleMini;
