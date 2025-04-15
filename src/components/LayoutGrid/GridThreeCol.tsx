import type { PropsGlobal } from '@/interface/articleProps';
import ArticleCard from '../Articles/ArticleCard';
import SectionTitle from '../SectionTitle';
import GridWrapper from './GridWrapper';
import ArticleMini from '../Articles/ArticleMini';

const GridThreeCol = ({
  posts,
  children,
  hasMiniArticle = false,
}: PropsGlobal) => {
  if (!posts) {
    return null;
  }
  return (
    <div id="gridThreeCol">
      {/* <SectionTitle title="XÂY DỰNG ĐẢNG" className="my-7 " /> */}
      <GridWrapper>
        <div className="col-span-9">
          <div className="grid grid-cols-9 gap-5 max-xs-max:flex max-xs-max:flex-col">
            <div className="col-span-6">
              <ArticleCard
                dataArticle={posts[1]}
                dateStyle="D-13"
                cateStyle="DM-14"
                titleStyle="H2"
                className="mb-5"
              />
            </div>
            <div className="col-span-3 ">
              <div className="flex flex-col gap-5">
                {posts?.slice(2, 4).map((item, index) => {
                  return (
                    <ArticleCard
                      titleStyle="heading-1"
                      hasCate={false}
                      hasDate={false}
                      key={index}
                      dataArticle={item}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          {hasMiniArticle && (
            <div
              className="grid grid-cols-3 gap-5 pt-7 mt-7 border-t-1
            max-xs-max:flex max-xs-max:flex-col"
            >
              {posts?.slice(1, 4).map((item, index) => {
                return (
                  <ArticleMini
                    titleStyle="heading-2"
                    hasCate={false}
                    hasDate={false}
                    key={index}
                    dataArticle={item}
                  />
                );
              })}
            </div>
          )}
        </div>

        <div className="col-span-3">{children}</div>
      </GridWrapper>
    </div>
  );
};

export default GridThreeCol;
