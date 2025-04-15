'use client';
import CarouselItemHomeG from '@/components/CarouselItemHomeG';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

import SectionTitle from '@/components/SectionTitle';
import type { PropsGlobal } from '@/interface/ArticleProps';
import React from 'react';

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

  // if (count === 0) return null;
  return (
    <div id="HomeG">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        setApi={setApi}
      >
        <SectionTitle title="XÂY DỰNG ĐẢNG" className="my-7 " />
        <CarouselContent>
          <CarouselItem>
            <CarouselItemHomeG posts={posts} />
          </CarouselItem>
          <CarouselItem>
            <CarouselItemHomeG posts={posts} />
          </CarouselItem>
          <CarouselItem>
            <CarouselItemHomeG posts={posts} />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className="flex justify-end  w-[80%] mt-7">
        <div style={{ display: 'flex', gap: 8 }}>
          {Array.from({ length: count + 1 }).map((_, index) => {
            console.log(current, index);
            return (
              <div
                key={index}
                style={{
                  width: current === index ? 30 : 12,
                  height: 12,
                  borderRadius: 9999,
                  backgroundColor: current === index ? '#7c7070' : '#d8cccc',
                  transition: 'all 0.3s ease',
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeG;
