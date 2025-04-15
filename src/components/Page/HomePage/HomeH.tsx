'use client';

import AdsBanner from '@/components/AdBanners';
import GridThreeCol from '@/components/LayoutGrid/GridThreeCol';
import type { PropsGlobal } from '@/interface/ArticleProps';

const HomeH = ({ posts }: PropsGlobal) => {
  return (
    <div id="HomeG">
      <GridThreeCol posts={posts}>
        <>
          {/* <ListArticleSide posts={posts} /> */}
          <AdsBanner />
        </>
      </GridThreeCol>
    </div>
  );
};

export default HomeH;
