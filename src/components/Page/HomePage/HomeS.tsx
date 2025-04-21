import GridThreeCol from '@/components/LayoutGrid/GridThreeCol';
import GridWrapper from '@/components/LayoutGrid/GridWrapper';
import ListArticleSide from '@/components/LayoutGrid/ListArticleSide';
import SectionTitle from '@/components/SectionTitle';
import type { PropsGlobal } from '@/interface/propsGlobal';
const dataTemp = [
  {
    id: 'lich-su-dang',
    title: 'Lịch sử Đảng',
  },
  {
    id: 'dang-ky',
    title: 'Đảng kỳ',
  },
  {
    id: 'dieu-le-dang',
    title: 'Điều lệ Đảng',
  },
  {
    id: 'sach-chinh-tri',
    title: 'Sách chính trị',
  },
  {
    id: 'van-kien-dang-toan-tap',
    title: 'Văn kiện Đảng toàn tập',
  },
  {
    id: 'gioi-thieu-van-kien',
    title: 'Giới thiệu văn kiện',
  },
  {
    id: 'van-kien-dai-hoi-dang',
    title: 'Văn kiện Đại hội Đảng',
  },
  {
    id: 'hoi-nghi-bch-trung-uong',
    title: 'Hội nghị BCH Trung ương',
  },
];

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
