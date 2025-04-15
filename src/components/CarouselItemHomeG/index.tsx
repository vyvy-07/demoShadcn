import type { PropsGlobal } from '@/interface/ArticleProps';
import ArticleCard from '../Articles/ArticleCard';
import GridWrapper from '../LayoutGrid/GridWrapper';

const CarouselItemHomeG = ({ posts }: PropsGlobal) => {
  if (!posts) {
    return null;
  }
  return (
    <div>
      <>
        <GridWrapper>
          <div className="col-span-6">
            <ArticleCard
              dataArticle={posts[1]}
              dateStyle="D-13"
              cateStyle="DM-14"
              titleStyle="H2"
              className="mb-5"
              // align="center"
            />
          </div>
          <div className="col-span-3 ">
            <div className="flex flex-col gap-5">
              {posts?.slice(2, 4).map((item, index) => {
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
        </GridWrapper>
      </>
    </div>
  );
};

export default CarouselItemHomeG;
