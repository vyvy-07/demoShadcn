'use client';

import ArticleCard from '@/components/Articles/ArticleCard';
import ArticleCustomCard from '@/components/Articles/ArticleCustomCard';
import Container from '@/components/Container/Container';
import GridWrapper from '@/components/LayoutGrid/GridWrapper';
import type { Article, PropsGlobal } from '@/interface/propsGlobal';
import { useState } from 'react';
interface HomeJTab extends PropsGlobal {
  posts: Article[];
  dataSectionHomeJ_2: Article[];
  dataSectionHomeJ_3: Article[];
}
const HomeQ = ({
  posts,
  dataHomeJ2,
  dataHomeJ3,
}: {
  posts: Article[];
  dataHomeJ2: Article[];
  dataHomeJ3: Article[];
}) => {
  if (!posts) {
    return null;
  }
  const [dataRender, setDataRender] = useState(posts);
  return (
    <div id="homeQ" className="bg-black py-5 mt-7">
      <Container>
        <div>
          <div id="section__title" className={`flex gap-2 mb-2`}>
            <div className="w-7 border-b-[4px] border-red-primary"></div>

            <div className="flex items-center gap-2 title text-white text-[22px] font-bold leading-[30px] uppercase ">
              <h3
                onClick={() => setDataRender(posts)}
                className="text-red-primary block cursor-pointer"
              >
                Video
              </h3>
              |
              <h3
                onClick={() => setDataRender(dataHomeJ2)}
                className="text-red-primary block cursor-pointer"
              >
                Audio
              </h3>
              |
              <h3
                onClick={() => setDataRender(dataHomeJ3)}
                className="text-red-primary block cursor-pointer"
              >
                Ảnh
              </h3>
            </div>
            <div className={`flex-grow border-b border-red-primary`}></div>
          </div>
        </div>
        <GridWrapper>
          <div
            className={` col-span-8 gap-5 max-xs-max:flex max-xs-max:flex-col`}
          >
            <ArticleCard
              dataArticle={dataRender[0]}
              dateStyle="D-13 text-white"
              cateStyle="DM-14 text-white"
              titleStyle="heading-1 text-white"
            />
          </div>
          <div className={`scrollbar col-span-4 h-[542px] overflow-x-hidden`}>
            <div className=" flex flex-col gap-4 overflow-x-hidden overflow-y-auto">
              {dataRender?.map((item, index) => {
                return (
                  <ArticleCustomCard
                    titleStyle="heading-4 text-white"
                    key={index}
                    className="pr-3"
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

export default HomeQ;
