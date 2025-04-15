import ArticleCard from '@/components/Articles/ArticleCard';
import GridWrapper from '@/components/LayoutGrid/GridWrapper';
import SectionTitle from '@/components/SectionTitle';
import type { PropsGlobal } from '@/interface/ArticleProps';

const HomeC = ({ posts }: PropsGlobal) => {
  return (
    <div id="homeC">
      <SectionTitle title="CHỦ TRƯƠNG, CHÍNH SÁCH MỚI" className="my-7" />
      <GridWrapper>
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
      </GridWrapper>
    </div>
  );
};

export default HomeC;
