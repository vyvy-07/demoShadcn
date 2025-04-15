import ArticleCustomCard from '@/components/Articles/ArticleCustomCard';
import GridThreeCol from '@/components/LayoutGrid/GridThreeCol';
import SectionTitle from '@/components/SectionTitle';
import type { PropsGlobal } from '@/interface/propsGlobal';

const HomeF = ({ posts }: PropsGlobal) => {
  if (!posts?.length) {
    return null;
  }
  return (
    <div id="homeF">
      <SectionTitle title="XÂY DỰNG ĐẢNG" className="my-7 " />

      <GridThreeCol posts={posts} hasMiniArticle={false}>
        <div className="flex flex-col gap-5">
          {posts?.length > 0 &&
            posts?.map((item, index) => {
              return (
                <div key={index + 3}>
                  <ArticleCustomCard
                    dataArticle={item}
                    className={`${index + 1 != posts?.length ? 'mb-5' : ''}`}
                  />
                  {index + 1 != posts?.length ? <hr /> : ''}
                </div>
              );
            })}
        </div>
      </GridThreeCol>
    </div>
  );
};

export default HomeF;
