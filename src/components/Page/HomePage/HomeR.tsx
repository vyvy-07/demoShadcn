import GridFourCol from '@/components/LayoutGrid/GridFourCol';
import GridWrapper from '@/components/LayoutGrid/GridWrapper';
import SectionTitle from '@/components/SectionTitle';
import type { PropsGlobal } from '@/interface/propsGlobal';
import React from 'react';
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

const HomeR = ({ posts }: PropsGlobal) => {
  return (
    <div id="homeR">
      <SectionTitle title={'TƯ LIỆU - VĂN KIỆN ĐẢNG'} className="mt-7 mb-4" />
      <GridWrapper className="max-lg-max:flex max-lg:flex-col">
        <div className="col-span-9 grid grid-cols-4 gap-5 max-xl:grid-cols-2">
          <img
            className="block w-full h-full "
            src="/images/cacMac.png"
            alt="Ph. Ăngghen"
          />
          <img
            className="block w-full h-full "
            src="/images/angghen.png"
            alt="Ph. Ăngghen"
          />
          <img
            className="block w-full h-full "
            src="/images/lenin.png"
            alt="Ph. Ăngghen"
          />
          <img
            className="block w-full h-full "
            src="/images/hoChiMinh.png"
            alt="Ph. Ăngghen"
          />
        </div>
        <div
          className="col-span-3 max-lg-max:flex max-lg-max:flex-wrap max-lg-max:justify-baseline
        max-lg-max:gap-3
        "
        >
          {dataTemp?.length > 0 &&
            dataTemp?.map((item) => (
              <div
                key={item?.title}
                className="whitespace-nowrap pt-[7px] mb-1 mx-3"
              >
                <img
                  className="inline-block mr-2"
                  src="images/icons/star.png"
                  alt=""
                />
                <span className="inline-block body-1">{item?.title}</span>
              </div>
            ))}
        </div>
      </GridWrapper>
    </div>
  );
};

export default HomeR;
