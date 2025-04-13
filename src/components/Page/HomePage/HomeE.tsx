import GridTwoCol from '@/components/ArticleGrid/GridLayout';
import ArticlePerson from '@/components/Articles/ArticlePerson';
import SectionTitle from '@/components/SectionTitle';
import type { ArticleProps } from '@/interface/ArticleProps';

const HomeE = ({ posts }: ArticleProps) => {
  if (!posts?.length) {
    return null;
  }
  return (
    <>
      <SectionTitle title="Chính trị" className="my-7" />
      <GridTwoCol>
        {posts?.slice(0, 3).map((item, index) => (
          <ArticlePerson
            key={index}
            className="col-span-4"
            horizonCard={true}
          />
        ))}
      </GridTwoCol>{' '}
    </>
  );
};

export default HomeE;
