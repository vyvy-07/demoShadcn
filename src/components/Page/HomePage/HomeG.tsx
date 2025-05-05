'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

import SectionTitle from '@/components/SectionTitle';
import React from 'react';
import type { PropsGlobal } from '@/interface/propsGlobal';
import CarouselItemHomeG from '@/components/HomeCarouselItem';
import GridWrapper from '@/components/LayoutGrid/GridWrapper';
import ArticleCard from '@/components/Articles/ArticleCard';

const HomeG = ({ posts }: PropsGlobal) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  if (!posts) return null;
  return (
    <div id="HomeG">
      <SectionTitle title="XÂY DỰNG ĐẢNG" className="mt-7 mb-4" />

      <GridWrapper>
        <div className="col-span-6">
          <ArticleCard
            titleStyle="H6"
            hasCate={false}
            hasDate={false}
            key={posts[0]?.id}
            dataArticle={posts[0]}
          />
        </div>
        <div className="col-span-6">
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            setApi={setApi}
          >
            <CarouselContent>
              <CarouselItem>
                <CarouselItemHomeG posts={posts?.slice(0, 4)} />
              </CarouselItem>
              <CarouselItem>
                <CarouselItemHomeG posts={posts?.slice(4, 8)} />
              </CarouselItem>
              <CarouselItem>
                <CarouselItemHomeG posts={posts?.slice(8, 12)} />
              </CarouselItem>
              <CarouselItem>
                <CarouselItemHomeG posts={posts?.slice(12, 16)} />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <div className="flex justify-end  w-[60%] mt-7">
            <div style={{ display: 'flex', gap: 8 }}>
              {Array.from({ length: count + 1 }).map((_, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      width: current === index ? 30 : 12,
                      height: 12,
                      borderRadius: 9999,
                      backgroundColor:
                        current === index ? '#7c7070' : '#d8cccc',
                      transition: 'all 0.3s ease',
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </GridWrapper>
    </div>
  );
};

export default HomeG;
