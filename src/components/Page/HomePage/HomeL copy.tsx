'use client';

import ArticleCard from '@/components/Articles/ArticleCard';
import Container from '@/components/Container/Container';
import GridWrapper from '@/components/LayoutGrid/GridWrapper';
import type { PropsGlobal } from '@/interface/propsGlobal';
import { useState } from 'react';

const HomeL = ({ posts }: PropsGlobal) => {
  const [DataRender, setDataRender] = useState();
  return (
    <div id="HomeL" className="bg-black py-5">
      <Container>
        <div>
          <div id="section__title" className={`flex gap-2 mb-2`}>
            <div className="w-7 border-b-[4px] border-red-primary"></div>

            <div className="flex items-center gap-2 title text-white text-[22px] font-bold leading-[30px] uppercase ">
              <h3 className="text-red-primary">Video</h3>|
              <h3 className="text-red-primary">Audio</h3>|
              <h3 className="text-red-primary">Ảnh</h3>
            </div>
            <div className={`flex-grow border-b border-red-primary`}></div>
          </div>
        </div>
        <GridWrapper>
          <div
            className={` col-span-9 gap-5 max-xs-max:flex max-xs-max:flex-col`}
          >
            <ArticleCard
              dataArticle={posts[1]}
              dateStyle="D-13"
              cateStyle="DM-14"
              titleStyle="heading-1"
            />
          </div>
          <div className={`col-span-3 `}>
            <div className="flex flex-col gap-5">
              {posts?.slice(2, 4).map((item, index) => {
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
        </GridWrapper>
      </Container>
    </div>
  );
};

export default HomeL;
