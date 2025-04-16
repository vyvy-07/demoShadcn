'use client';

import AdsBanner from '@/components/AdBanners';
import GridThreeCol from '@/components/LayoutGrid/GridThreeCol';
import SectionTitle from '@/components/SectionTitle';
import type { PropsGlobal } from '@/interface/propsGlobal';

const HomeH = ({ posts }: PropsGlobal) => {
  return (
    <div id="HomeH">
      <SectionTitle className="mt-7 mb-4" title="Khoa học - công nghệ" />
      <GridThreeCol posts={posts} hasMiniArticle={true}>
        <>
          <AdsBanner />
        </>
      </GridThreeCol>
    </div>
  );
};

export default HomeH;
