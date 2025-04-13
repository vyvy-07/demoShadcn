import GridTwoCol from '@/components/ArticleGrid/GridLayout';
import ListArticleSide from '@/components/ArticleGrid/ListArticleSide';
import ArticleCard from '@/components/Articles/ArticleCard';
import SectionTitle from '@/components/SectionTitle';
import type { ArticleProps } from '@/interface/ArticleProps';
import React from 'react';

const HomeA = ({ posts }: ArticleProps) => {
  if (!posts?.length) {
    return null;
  }
  return (
    <>
      <GridTwoCol>
        <div className="col-span-6">
          <ArticleCard
            dataArticle={posts[1]}
            dateStyle="D-13"
            cateStyle="DM-14"
            titleStyle="h4"
          />
          <div className="grid grid-cols-2 gap-5">
            {posts?.length > 0 &&
              posts
                ?.slice(1, 3)
                .map((item, index) => (
                  <ArticleCard
                    titleStyle="h5"
                    dateStyle="D-13"
                    cateStyle="DM-14"
                    key={index}
                    dataArticle={item}
                  />
                ))}
          </div>
        </div>
        {/* 1 */}
        <div className="col-span-3">
          {posts?.length > 0 &&
            posts?.map((item, index) => (
              <ArticleCard
                titleStyle="H5"
                dateStyle="D-11"
                cateStyle="DM-12"
                className="mb-5"
                key={index}
                dataArticle={item}
              />
            ))}
        </div>
        <div className="col-span-3">
          <ListArticleSide posts={posts} />
        </div>
      </GridTwoCol>
    </>
  );
};

export default HomeA;
