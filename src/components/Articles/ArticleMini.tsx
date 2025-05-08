import type { PropsGlobal } from '@/interface/propsGlobal';
import React from 'react';
import IconTypeArticle from '../IconTypeArticle';

const ArticleMini = ({
  dataArticle,
  className,
  iconType = 'left',
}: PropsGlobal) => {
  const url =
    'https://api.nongthonviet.com.vn/media/2025/04/09/67f629249f9c5248f66aea69_tang-truong-kinh-te-tphcm_medium.jpg';

  return (
    <div className={`${className} flex items-start gap-5`}>
      <div className="relative w-[60px] h-[60px]">
        <img
          className="w-full h-full object-cover"
          src={
            dataArticle?.featuredMedia?.resolutions?.medium?.uri ||
            dataArticle?.featuredImage ||
            url
          }
          alt={dataArticle?.featuredMedia?.alt}
        />
        <IconTypeArticle
          className={
            iconType == 'align'
              ? 'absolute top-[50%] left-1/2 -translate-[50%] z-20 '
              : 'absolute bottom-0 right-0  z-20 '
          }
          type={dataArticle?.type || ''}
          styleImg={iconType == 'align' ? 'w-[50px]' : 'w-[22px]'}
        />
      </div>
      <div className="flex-1 ">
        <h5 className="body-2">{dataArticle?.title}</h5>
      </div>
    </div>
  );
};

export default ArticleMini;
