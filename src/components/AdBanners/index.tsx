import type { PropsGlobal } from '@/interface/propsGlobal';
import Image from 'next/image';
import React from 'react';

const AdsBanner = ({ className, url }: PropsGlobal) => {
  return (
    <div className={`${className}`}>
      <Image
        width={300}
        height={700}
        src="/images/banners/ads2.png"
        className="h-full w-full"
        alt="vinhlong"
      />
    </div>
  );
};

export default AdsBanner;
