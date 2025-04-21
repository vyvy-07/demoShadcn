import GridThreeCol from '@/components/LayoutGrid/GridThreeCol';
import ListArticleSide from '@/components/LayoutGrid/ListArticleSide';
import SectionTitle from '@/components/SectionTitle';
import type { PropsGlobal } from '@/interface/propsGlobal';

const HomeS = ({ posts }: PropsGlobal) => {
  return (
    <div id="homeS">
      <SectionTitle title={'TƯ LIỆU - VĂN KIỆN ĐẢNG'} className="mt-7 mb-4" />
      <GridThreeCol posts={posts}>
        <ListArticleSide
          title="VĂN BẢN MỚI"
          hasDate={true}
          titleCenter={true}
          hasBorder={true}
          posts={posts}
        />
      </GridThreeCol>
    </div>
  );
};

export default HomeS;
