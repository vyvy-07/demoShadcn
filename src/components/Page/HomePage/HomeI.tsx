import ArticleCard from '@/components/Articles/ArticleCard';
import GridWrapper from '@/components/LayoutGrid/GridWrapper';
import SectionTitle from '@/components/SectionTitle';
import ListArticleSide from '@/components/SideRight/ListArticleSide';
import type { PropsGlobal } from '@/interface/propsGlobal';

const HomeI = ({ posts }: PropsGlobal) => {
  if (!posts) {
    return null;
  }
  return (
    <div id="HomeI">
      <SectionTitle className="mt-7 mb-4" title="Khoa học - công nghệ" />
      <GridWrapper>
        <div className={`col-span-3 `}>
          <div className="flex flex-col gap-5">
            {posts?.slice(0, 2).map((item, index) => {
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
        <div className="col-span-6 max-w-[610px] w-full">
          <ArticleCard
            dataArticle={posts[3]}
            dateStyle="D-13"
            cateStyle="DM-14"
            titleStyle="heading-1"
          />
        </div>
        <div className="col-span-3">
          <ListArticleSide
            posts={posts}
            hasTitle={false}
            hasModifiedFirstPost={true}
          />
        </div>
      </GridWrapper>
    </div>
  );
};

export default HomeI;
