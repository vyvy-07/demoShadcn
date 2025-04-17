import AdsBanner from '@/components/AdBanners';
import ArticleCard from '@/components/Articles/ArticleCard';
import GridWrapper from '@/components/LayoutGrid/GridWrapper';
import ListArticleSide from '@/components/LayoutGrid/ListArticleSide';
import type { PropsGlobal } from '@/interface/propsGlobal';

const HomeA = ({
  posts,
  postsSide,
  dataLayoutMain,
  dataLayoutSide,
}: PropsGlobal) => {
  return (
    <div id="homeA">
      <GridWrapper>
        <div className="col-span-9 gap-5">
          {posts && (
            <ArticleCard
              dataArticle={posts[0]}
              titleStyle="H1"
              dateStyle="D-13"
              cateStyle="DM-14"
              className="mb-5"
              align="center"
            />
          )}
          <div className="grid grid-cols-2 gap-5 mt-5">
            {posts?.slice(1, 3).map((item, index: number) => (
              <ArticleCard
                titleStyle="H3"
                dateStyle="D-13"
                cateStyle="DM-14"
                key={index}
                dataArticle={item}
              />
            ))}
          </div>
        </div>

        <div className="col-span-3">
          <ListArticleSide
            title={dataLayoutSide?.title}
            className="line-clamp-2"
            posts={postsSide}
            hasModifiedFirstPost={true}
          />
          <AdsBanner url="/banners/ads2.png" className="mt-5" />
        </div>
      </GridWrapper>
    </div>
  );
};

export default HomeA;
