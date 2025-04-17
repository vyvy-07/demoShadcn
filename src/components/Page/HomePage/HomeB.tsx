import GridFourCol from '@/components/LayoutGrid/GridFourCol';
import TitlteDotArticle from '@/components/LayoutGrid/TitlteDotArticle';
import SectionTitle from '@/components/SectionTitle';
import type { PropsGlobal } from '@/interface/propsGlobal';

const HomeB = ({ posts, dataLayout }: PropsGlobal) => {
  if (!posts?.length || !dataLayout) {
    return null;
  }
  return (
    <div id="homeB">
      <SectionTitle
        title={dataLayout?.HomeB_Main?.title || ''}
        className="mt-7 mb-4"
      />
      <div className="">
        <GridFourCol>
          {posts?.slice(0, 4).map((item, index: number) => (
            <TitlteDotArticle dataArticle={item} key={item?.id} />
          ))}
        </GridFourCol>
      </div>
    </div>
  );
};

export default HomeB;
