import GridWrapper from '@/components/LayoutGrid/GridWrapper';
import ListDocxSide from '@/components/SideRight/ListDocxSide';
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

const HomeT = ({ posts }: PropsGlobal) => {
  return (
    <div id="homeT">
      {/* <SectionTitle title={'CÁC CƠ QUAN THAM MƯU'} className="mt-7 mb-4" /> */}
      <GridWrapper className="max-lg-max:flex max-lg:flex-col mt-7">
        <ListDocxSide
          className="col-span-4"
          title="CÁC CƠ QUAN THAM MƯU"
          dataTemp={dataTemp}
        />
        <ListDocxSide
          className="col-span-4"
          title="CÁC HUYỆN, THỊ , THÀNH ỦY"
          dataTemp={dataTemp}
        />
        <ListDocxSide
          className="col-span-4"
          title="ĐẢNG ỦY CÁC CƠ QUAN ĐẢNG TỈNH"
          dataTemp={dataTemp}
        />
      </GridWrapper>
    </div>
  );
};

export default HomeT;
