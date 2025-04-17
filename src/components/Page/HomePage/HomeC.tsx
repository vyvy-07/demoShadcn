import ArticleCard from '@/components/Articles/ArticleCard';
import GridFourCol from '@/components/LayoutGrid/GridFourCol';
import SectionTitle from '@/components/SectionTitle';
import type { PropsGlobal } from '@/interface/propsGlobal';

const HomeC = ({ posts, dataLayoutMain, dataLayoutSide }: PropsGlobal) => {
  return (
    <div id="homeC">
      <SectionTitle
        title={dataLayoutMain?.title || 'Mới nhất'}
        className="mt-7 mb-4"
      />
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

export default HomeC;
