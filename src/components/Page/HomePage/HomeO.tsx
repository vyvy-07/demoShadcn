import ArticleCustomCard from '@/components/Articles/ArticleCustomCard';
import GridThreeCol from '@/components/LayoutGrid/GridThreeCol';
import SectionTitle from '@/components/SectionTitle';
import type { PropsGlobal } from '@/interface/propsGlobal';

const HomeO = ({ posts }: PropsGlobal) => {
  if (!posts?.length) {
    return null;
  }

  return (
    <div id="homeO" className=" mt-7 px-1">
      <SectionTitle
        title="HỌC TẬP VÀ LÀM THEO TƯ TƯỞNG, ĐẠO ĐỨC, PHONG CÁCH HỒ CHÍ MINH"
        className=" mb-4"
      />

      <GridThreeCol posts={posts}>
        <div className="flex flex-col gap-4">
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
        </div>
      </GridThreeCol>
    </div>
  );
};

export default HomeO;
