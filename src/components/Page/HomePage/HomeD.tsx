import GridTwoCol from '@/components/ArticleGrid/GridLayout';
import ArticleCard from '@/components/Articles/ArticleCard';
import ArticlePerson from '@/components/Articles/ArticlePerson';
import SectionTitle from '@/components/SectionTitle';
import type { ArticleProps } from '@/interface/ArticleProps';

const HomeD = ({ posts }: ArticleProps) => {
  if (!posts?.length) {
    return null;
  }

  return (
    <>
      <SectionTitle title="Chính trị" className="my-7" />
      <GridTwoCol>
        {posts?.slice(0, 4).map((item, index) => (
          <ArticlePerson className="col-span-3" key={index} />
        ))}
      </GridTwoCol>
    </>
  );
};

export default HomeD;
