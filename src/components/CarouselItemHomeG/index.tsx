import type { PropsGlobal } from '@/interface/propsGlobal';
import ArticleCard from '../Articles/ArticleCard';
import GridThreeCol from '../LayoutGrid/GridThreeCol';

const CarouselItemHomeG = ({ posts }: PropsGlobal) => {
  if (!posts) {
    return null;
  }
  return (
    <div>
      <GridThreeCol posts={posts}>
        <div className="col-span-3">
          <div className="flex flex-col gap-5">
            {posts?.length > 0 &&
              posts?.slice(0, 2).map((item, index) => {
                return (
                  <ArticleCard
                    titleStyle="H6"
                    hasCate={false}
                    hasDate={false}
                    key={index}
                    dataArticle={item}
                  />
                );
              })}
          </div>
        </div>
      </GridThreeCol>
    </div>
  );
};

export default CarouselItemHomeG;
