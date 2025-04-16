import ArticleCard from '@/components/Articles/ArticleCard';
import GridFourCol from '@/components/LayoutGrid/GridFourCol';
import SectionTitle from '@/components/SectionTitle';
import type { PropsGlobal } from '@/interface/propsGlobal';

const HomeM = ({ posts }: PropsGlobal) => {
  return (
    <div id="homeM">
      <SectionTitle title="CHỦ TRƯƠNG, CHÍNH SÁCH MỚI" className="mt-7 mb-4" />
      <GridFourCol>
        {posts?.slice(0, 4).map((item, index) => (
          <ArticleCard
            titleStyle="H5"
            dateStyle="D-11"
            cateStyle="DM-12"
            key={index}
            dataArticle={item}
          />
        ))}
      </GridFourCol>
    </div>
  );
};

export default HomeM;
