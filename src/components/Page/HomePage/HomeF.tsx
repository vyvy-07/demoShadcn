import ArticleCustomCard from '@/components/Articles/ArticleCustomCard';
import GridThreeCol from '@/components/LayoutGrid/GridThreeCol';
import SectionTitle from '@/components/SectionTitle';
import ListArticleSideMini from '@/components/SideRight/ListArticleSideMini';
import type { PropsGlobal } from '@/interface/propsGlobal';

const HomeF = ({ posts, dataLayoutMain }: PropsGlobal) => {
  if (!posts?.length) {
    return null;
  }
  return (
    <div id="homeF">
      <SectionTitle
        title={dataLayoutMain?.title || 'Xây dựng Đảng'}
        className="mt-7 mb-4"
      />

      <GridThreeCol posts={posts} hasMiniArticle={false}>
        {/* <div className="flex flex-col gap-4">
          {posts?.length > 0 &&
            posts?.map((item, index) => {
              return (
                <div key={index + 3}>
                  <ArticleCustomCard
                    dataArticle={item}
                    className={`${index + 1 != posts?.length ? 'mb-4' : ''}`}
                  />
                  {index + 1 != posts?.length ? (
                    <hr className="text-grey" />
                  ) : (
                    ''
                  )}
                </div>
              );
            })}
        </div> */}
        <ListArticleSideMini
          className="mt-5"
          hasTitle={false}
          posts={posts?.slice(3, posts?.length)}
        />
      </GridThreeCol>
    </div>
  );
};

export default HomeF;
