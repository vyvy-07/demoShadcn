import GridThreeCol from '@/components/LayoutGrid/GridThreeCol';
import ListArticleSide from '@/components/LayoutGrid/ListArticleSide';
import SectionTitle from '@/components/SectionTitle';
import type { PropsGlobal } from '@/interface/propsGlobal';

const HomeI = ({ posts }: PropsGlobal) => {
  return (
    <div id="HomeI">
      <SectionTitle className="mt-7 mb-4" title="Khoa học - công nghệ" />

      <GridThreeCol reverseTwoRow={true} posts={posts}>
        <ListArticleSide
          posts={posts}
          hasTitle={false}
          hasModifiedFirstPost={true}
        />
      </GridThreeCol>
    </div>
  );
};

export default HomeI;
