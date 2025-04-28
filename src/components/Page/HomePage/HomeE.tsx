import ArticlePerson from '@/components/Articles/ArticlePerson';
import GridWrapper from '@/components/LayoutGrid/GridWrapper';
import SectionTitle from '@/components/SectionTitle';
import type { PropsGlobal } from '@/interface/propsGlobal';

const HomeE = ({ posts }: PropsGlobal) => {
  const arr = Array.from({ length: 4 }, (_, index) => index + 1);

  return (
    <div id="homeE">
      <SectionTitle title="LÃNH ĐẠO ĐẢNG, NHÀ NƯỚC" className="mt-7 mb-4" />
      <GridWrapper className="">
        {arr?.slice(0, 3).map((item, index) => (
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
