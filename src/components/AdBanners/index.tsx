import type { PropsGlobal } from '@/interface/ArticleProps';
import React from 'react';

const AdsBanner = ({ className, url }: PropsGlobal) => {
  return (
    <div className={`${className}`}>
      <img src={url || '/banners/ads.png'} alt="" />
    </div>
  );
};

export default AdsBanner;
