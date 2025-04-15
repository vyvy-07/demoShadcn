import TitlteDotArticle from '@/components/LayoutGrid/TitlteDotArticle';
import SectionTitle from '@/components/SectionTitle';
import type { Article, PropsGlobal } from '@/interface/ArticleProps';

const HomeB = ({ posts }: PropsGlobal) => {
  if (!posts?.length) {
    return null;
  }
  return (
    <div id="homeB">
      <SectionTitle title="CHỦ TRƯƠNG, CHÍNH SÁCH MỚI" className="my-7" />
      <div className="grid grid-cols-4">
        {posts?.slice(0, 4).map((item: Article, index: number) => (
          <TitlteDotArticle dataArticle={item} key={item?.id} />
        ))}
      </div>
    </div>
  );
};

export default HomeB;
