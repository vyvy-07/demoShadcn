import ArticleCard from '@/components/Articles/ArticleCard';
import ArticleCustomCard from '@/components/Articles/ArticleCustomCard';
import GridWrapper from '@/components/LayoutGrid/GridWrapper';
import SectionTitle from '@/components/SectionTitle';
import type { PropsGlobal } from '@/interface/ArticleProps';

const HomeF = ({ posts }: PropsGlobal) => {
  if (!posts?.length) {
    return null;
  }
  return (
    <div id="homeF">
      <SectionTitle title="XÂY DỰNG ĐẢNG" className="my-7 " />
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
              posts?.map((item, index) => {
                return (
                  <div key={index + 3}>
                    <ArticleCustomCard
                      dataArticle={item}
                      className={`${index + 1 != posts?.length ? 'mb-5' : ''}`}
                    />
                    {index + 1 != posts?.length ? <hr /> : ''}
                  </div>
                );
              })}
          </div>
        </div>
      </GridWrapper>
    </div>
  );
};

export default HomeF;
