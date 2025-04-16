import { HomeKMedia } from '@/components/HomeKMedia';
import type { PropsGlobal } from '@/interface/propsGlobal';

const HomeP = ({ posts }: PropsGlobal) => {
  if (!posts?.length) {
    return null;
  }

  return (
    <div id="homeP" className="  grid grid-cols-3 gap-5">
      {posts && <HomeKMedia title="Video" posts={posts} />}
      {posts && <HomeKMedia title="Audio" posts={posts} />}
      {posts && <HomeKMedia title="Tư liệu Ảnh" posts={posts} />}
    </div>
  );
};

export default HomeP;
