import ArticleCustomCard from '@/components/Articles/ArticleCustomCard';
import GridThreeCol from '@/components/LayoutGrid/GridThreeCol';
import SectionTitle from '@/components/SectionTitle';
import type { PropsGlobal } from '@/interface/propsGlobal';

const HomeP = ({ posts }: PropsGlobal) => {
  if (!posts?.length) {
    return null;
  }

  return (
    <div id="homeP" className=" mt-7 px-1">
      <SectionTitle
        title="HỌC TẬP VÀ LÀM THEO TƯ TƯỞNG, ĐẠO ĐỨC, PHONG CÁCH HỒ CHÍ MINH"
        className=" mb-4"
      />

      <GridThreeCol posts={posts}>
        {posts?.map((item, index) => (
          <ArticleCustomCard key={index} dataArticle={item} />
        ))}
      </GridThreeCol>
    </div>
  );
};

export default HomeP;
