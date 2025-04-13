import GridTwoCol from '@/components/ArticleGrid/GridLayout';
import ListArticleSide from '@/components/ArticleGrid/ListArticleSide';
import TitlteDotArticle from '@/components/ArticleGrid/TitlteDotArticle';
import ArticleCard from '@/components/Articles/ArticleCard';
import type { Article, ArticleProps } from '@/interface/ArticleProps';

const HomeA = ({ posts }: ArticleProps) => {
  return (
    <>
      <GridTwoCol>
        <div className="col-span-9 gap-5">
          {posts && (
            <ArticleCard
              dataArticle={posts[0]}
              titleStyle="H2"
              dateStyle="D-13"
              cateStyle="DM-14"
              className="mb-5"
              align="center"
            />
          )}
          <div className="grid grid-cols-2 gap-5 mt-5">
            {posts?.slice(1, 3).map((item: Article, index: number) => (
              <ArticleCard
                titleStyle="H5"
                dateStyle="D-13"
                cateStyle="DM-14"
                key={index}
                dataArticle={item}
              />
            ))}
          </div>
        </div>

        <div className="col-span-3">
          <ListArticleSide posts={posts} hasModifiedFirstPost={true} />
        </div>
      </GridTwoCol>
    </>
  );
};

export default HomeA;
