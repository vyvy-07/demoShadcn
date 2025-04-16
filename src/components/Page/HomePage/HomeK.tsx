'use client';

import { HomeKMedia } from '@/components/HomeKMedia';
import type { PropsGlobal } from '@/interface/propsGlobal';

const HomeK = ({ posts }: PropsGlobal) => {
  return (
    <div id="HomeK" className="grid grid-cols-3 gap-5">
      {posts && <HomeKMedia title="Video" posts={posts} />}
      {posts && <HomeKMedia title="Audio" posts={posts} />}
      {posts && <HomeKMedia title="Tư liệu Ảnh" posts={posts} />}
    </div>
  );
};

export default HomeK;
