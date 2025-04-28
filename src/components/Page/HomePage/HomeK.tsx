'use client';

import { HomeKMedia } from '@/components/HomeKMedia';
import type { Article, PropsGlobal } from '@/interface/propsGlobal';

const HomeK = ({
  posts,
  dataHomeJ2,
  dataHomeJ3,
}: {
  posts: Article[];
  dataHomeJ2: Article[];
  dataHomeJ3: Article[];
}) => {
  return (
    <div id="HomeK" className="grid grid-cols-3 gap-5">
      {posts && <HomeKMedia title="Video" posts={posts} />}
      {posts && <HomeKMedia title="Audio" posts={dataHomeJ2} />}
      {posts && <HomeKMedia title="Tư liệu Ảnh" posts={dataHomeJ3} />}
    </div>
  );
};

export default HomeK;
