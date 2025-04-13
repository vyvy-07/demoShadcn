import GridTwoCol from '@/components/ArticleGrid/GridLayout';
import ListArticleSide from '@/components/ArticleGrid/ListArticleSide';
import ArticleCard from '@/components/Articles/ArticleCard';
import SectionTitle from '@/components/SectionTitle';
import type { ArticleProps } from '@/interface/ArticleProps';

const HomeC = ({ posts }: ArticleProps) => {
  return (
    <div id="homeC">
      <SectionTitle title="Chính trị" className="my-7" />
      <GridTwoCol>
        {posts?.slice(0, 4).map((item, index) => (
          <ArticleCard
            titleStyle="H5"
            dateStyle="D-11"
            cateStyle="DM-12"
            className=" col-span-3"
            key={index}
            dataArticle={item}
          />
        ))}
      </GridTwoCol>
    </div>
  );
};

export default HomeC;
