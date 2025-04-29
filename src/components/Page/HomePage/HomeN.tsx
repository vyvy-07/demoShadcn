import CarouselItemHomeG from '@/components/HomeCarouselItem';
import SectionTitle from '@/components/SectionTitle';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import type { PropsGlobal } from '@/interface/propsGlobal';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';

const HomeN = ({ posts }: PropsGlobal) => {
  if (!posts?.length) {
    return null;
  }
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

  return (
    <div id="homeN" className="bg-grey-hover py-7 mt-7 px-1">
      <SectionTitle lineUnderTitle={true} title="XÂY DỰNG ĐẢNG" className="" />

      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="mt-5"
        setApi={setApi}
      >
        <CarouselContent>
          <CarouselItem>
            <CarouselItemHomeG posts={posts?.slice(0, 5)} />
          </CarouselItem>
          <CarouselItem>
            <CarouselItemHomeG posts={posts.slice(5, 10)} />
          </CarouselItem>
          <CarouselItem>
            <CarouselItemHomeG posts={posts.slice(10, 15)} />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HomeN;
