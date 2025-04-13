import TitlteDotArticle from '@/components/ArticleGrid/TitlteDotArticle';
import SectionTitle from '@/components/SectionTitle';
import type { Article, ArticleProps } from '@/interface/ArticleProps';

const HomeB = ({ posts }: ArticleProps) => {
  if (!posts?.length) {
    return null;
  }
  return (
    <>
      <SectionTitle title="CHỦ TRƯƠNG, CHÍNH SÁCH MỚI" className="my-7" />
      <div className="grid grid-cols-4">
        {posts?.slice(0, 5).map((item: Article, index: number) => (
          <TitlteDotArticle dataArticle={item} key={item?.id} />
        ))}
      </div>
    </>
  );
};

export default HomeB;
