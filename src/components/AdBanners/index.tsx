import type { PropsGlobal } from '@/interface/propsGlobal';
import React from 'react';

const AdsBanner = ({ className, url }: PropsGlobal) => {
  return (
    <div className={`${className}`}>
      <img src="/banners/ads.png" className="h-full" alt="" />
    </div>
  );
};

export default AdsBanner;
