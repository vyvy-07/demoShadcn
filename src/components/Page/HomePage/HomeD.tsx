import ArticlePerson from '@/components/Articles/ArticlePerson';
import GridWrapper from '@/components/LayoutGrid/GridWrapper';
import SectionTitle from '@/components/SectionTitle';
import type { PropsGlobal } from '@/interface/propsGlobal';

const HomeD = ({ posts }: PropsGlobal) => {
  if (!posts?.length) {
    return null;
  }

  return (
    <div id="homeD">
      <SectionTitle title="LÃNH ĐẠO ĐẢNG, NHÀ NƯỚC" className="mt-7 mb-4" />
      <GridWrapper>
        {posts?.slice(0, 4).map((item, index) => (
          <ArticlePerson className="col-span-3" key={index} />
        ))}
      </GridWrapper>
    </div>
  );
};

export default HomeD;
