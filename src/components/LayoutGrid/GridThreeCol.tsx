import ArticleCard from '../Articles/ArticleCard';
import SectionTitle from '../SectionTitle';
import GridWrapper from './GridWrapper';
import ArticleMini from '../Articles/ArticleMini';
import type { PropsGlobal } from '@/interface/propsGlobal';

const GridThreeCol = ({
  posts,
  children,
  hasMiniArticle = false,
  reverseTwoRow = false,
}: PropsGlobal) => {
  if (!posts) {
    return null;
  }
  return (
    <div id="gridThreeCol">
      {/* <SectionTitle title="XÂY DỰNG ĐẢNG" className="my-7 " /> */}
      <GridWrapper>
        <div className="col-span-9">
          <div
            className={`grid grid-cols-9 gap-5 max-xs-max:flex max-xs-max:flex-col
           ${reverseTwoRow ? 'flex flex-row-reverse' : ''}
              
           `}
          >
            <div className="col-span-6 max-w-[610px] w-full">
              <ArticleCard
                dataArticle={posts[0]}
                dateStyle="D-13"
                cateStyle="DM-14"
                titleStyle="heading-1"
              />
            </div>
            <div className={`col-span-3 ${reverseTwoRow && 'flex-1'}`}>
              <div className="flex flex-col gap-5">
                {posts?.slice(1, 3).map((item, index) => {
                  return (
                    <ArticleCard
                      titleStyle="heading-4"
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
              className="grid grid-cols-3 gap-5 pt-4 mt-4 border-t-1
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
