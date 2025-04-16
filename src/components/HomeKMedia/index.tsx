import React from 'react';
import SectionTitle from '../SectionTitle';
import ArticleCard from '../Articles/ArticleCard';
import type { PropsGlobal } from '@/interface/propsGlobal';
import ArticleCustomCard from '../Articles/ArticleCustomCard';

export const HomeKMedia = ({ title, posts }: PropsGlobal) => {
  if (!posts) {
    return null;
  }
  return (
    <div>
      <SectionTitle className="mt-7 mb-4" title={title} />
      <div className="flex flex-col gap-4">
        <ArticleCard
          dataArticle={posts[0]}
          hasCate={false}
          hasDate={false}
          titleStyle="heading-3"
        />

        {posts &&
          posts?.slice(1, 3).map((item, index) => {
            return (
              <div key={item?.id || index}>
                <ArticleCustomCard
                  dataArticle={item}
                  className={`${index + 1 != posts?.[index] ? 'mb-4' : ''}`}
                />
                {index != 1 && <hr />}{' '}
              </div>
            );
          })}
      </div>
    </div>
  );
};
