import ArticleCustomCard from '@/components/Articles/ArticleCustomCard';
import type { Article } from '@/interface/propsGlobal';
import React from 'react';

const ArtRelatedFoot = ({ dataArticle }: { dataArticle: Article }) => {
  return (
    <div className="border border-grey mt-5 p-5">
      <div className="mb-3">
        <span className="heading-2 block w-full border-b border-grey">
          Tin liên quan
        </span>
      </div>
      <>
        <ArticleCustomCard
          width={209}
          height={118}
          hasSapo={true}
          titleStyle="heading-2"
          sapoStyle="line-clamp-4"
          dataArticle={dataArticle}
          hasCate={false}
        />
      </>
    </div>
  );
};

export default ArtRelatedFoot;
