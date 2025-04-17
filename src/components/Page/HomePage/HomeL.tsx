import ArticleCard from '@/components/Articles/ArticleCard';
import Container from '@/components/Container/Container';
import SectionTitle from '@/components/SectionTitle';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import styled from 'styled-components';

import type { PropsGlobal } from '@/interface/propsGlobal';
import Autoplay from 'embla-carousel-autoplay';
const DIV = styled.div`
  transform: translateX(-50%);
  right: 50%;
`;
const HomeL = ({ posts }: PropsGlobal) => {
  return (
    <div id="HomeL" className="bg-red-hover mt-7 pt-8 pb-9 relative">
      <Container>
        <SectionTitle
          lineUnderTitle={true}
          className="mb-5 "
          title="Công nghiệp"
        />
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            {posts &&
              posts?.map((item, index) => {
                return (
                  <CarouselItem key={item?.id} className="basis-1/4">
                    <div key={item?.id || index}>
                      <ArticleCard
                        dateStyle="D-13"
                        cateStyle="DM-14"
                        titleStyle="heading-4"
                        dataArticle={item}
                      />
                    </div>
                  </CarouselItem>
                );
              })}
          </CarouselContent>
          <div className="pt-10 max-sm:pt-7">
            <div className="absolute right-1/2 translate-x-[-50%] bottom-0 ">
              <CarouselPrevious variant="default" className="bg-red-primary" />
              <CarouselNext variant="default" className="bg-red-primary" />
            </div>
          </div>
        </Carousel>
      </Container>
    </div>
  );
};

export default HomeL;
