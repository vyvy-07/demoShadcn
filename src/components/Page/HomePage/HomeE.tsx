import ArticlePerson from '@/components/Articles/ArticlePerson';
import GridWrapper from '@/components/LayoutGrid/GridWrapper';
import SectionTitle from '@/components/SectionTitle';
import type { PropsGlobal } from '@/interface/ArticleProps';

const HomeE = ({ posts }: PropsGlobal) => {
  if (!posts?.length) {
    return null;
  }
  return (
    <div id="homeE">
      <SectionTitle title="LÃNH ĐẠO ĐẢNG, NHÀ NƯỚC" className="my-7" />
      <GridWrapper>
        {posts?.slice(0, 3).map((item, index) => (
          <ArticlePerson
            key={index}
            className="col-span-4"
            horizonCard={true}
          />
        ))}
      </GridWrapper>{' '}
    </div>
  );
};

export default HomeE;
