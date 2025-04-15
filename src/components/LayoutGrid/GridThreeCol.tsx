import type { PropsGlobal } from '@/interface/ArticleProps';
import ArticleCard from '../Articles/ArticleCard';
import SectionTitle from '../SectionTitle';
import GridWrapper from './GridWrapper';
import ArticleMini from '../Articles/ArticleMini';

const GridThreeCol = ({ posts, children }: PropsGlobal) => {
  if (!posts) {
    return null;
  }
  return (
    <div id="gridThreeCol">
      <SectionTitle title="XÂY DỰNG ĐẢNG" className="my-7 " />
      <GridWrapper>
        <div className="col-span-9">
          <div className="grid grid-cols-9 gap-5">
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
          </div>
          <div className="grid grid-cols-3 gap-5 pt-7 border-t-1">
            {posts?.slice(1, 4).map((item, index) => {
              return (
                <ArticleMini
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

        {/* <div className="col-span-3 ">
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
        </div> */}
        <div className="col-span-3">{children}</div>
      </GridWrapper>
    </div>
  );
};

export default GridThreeCol;
