import type { PropsGlobal } from '@/interface/propsGlobal';
import React from 'react';
import Container from '../Container/Container';

const Footer = ({ dataCategory }: PropsGlobal) => {
  const data = dataCategory;
  return (
    <footer className="bg-grey-footer py-10 mt-7">
      <Container>
        <ul className="flex justify-center gap-5 bg-black max-lg:flex-wrap">
          {Array.isArray(data) &&
            data?.slice(0, 9).map((item) => (
              <li key={item?.id}>
                <a
                  className="heading-4 uppercase text-white"
                  href={item?.alias}
                >
                  {item?.name}
                </a>
              </li>
            ))}
        </ul>
        <hr className="mt-2  h-[2px] text-white" />
        <div className="text-center mt-9">
          <h1 className="body-2 font-semibold mb-[18px] ">
            CỔNG THÔNG TIN ĐIỆN TỬ TỈNH ỦY VĨNH LONG
          </h1>
          <div className="body-2 mb-9">
            <p>Cơ quan quản lý Website: Ban Tuyên giáo Tỉnh ủy Vĩnh Long</p>
            <p>Trưởng ban biên tập: Nguyễn Thị Minh Trang</p>
          </div>
          <div className="mb-3 body-2 ">
            <p>Lượt xem: 1634732</p>
            <p>Lượt online: 0000004</p>
          </div>
          <div className="flex justify-center gap-2 max-xs-max:flex-col ">
            <span className="block text-red-primary mr-2">
              Theo dõi Cổng thông tin điện tử Tỉnh uỷ Vĩnh Long trên:
            </span>
            <div className="flex justify-center gap-2">
              <img className="w-6" srcSet="/images/icons/fb.png 2x" alt="" />
              <img className="w-6" srcSet="/images/icons/zalo.png 2x" alt="" />
              <img className="w-6" srcSet="/images/icons/yt.png 2x" alt="" />
            </div>
          </div>
        </div>
        <hr className="mt-7 mb-5" />
        <div className="flex justify-between gap-5 body-2 max-md-max:flex-col ">
          <div>
            <p>
              Địa chỉ: 166/3B, Phạm Hùng - Phường 9 - TP. Vĩnh Long Điện thoại:
            </p>
            <p>02703.822.221 - FAX: 02703.831.097 Email:</p>
            <p>banbientapwebtu@vinhlong.gov.vn</p>
          </div>
          <div>
            <p>
              Giấy phép số:  10/GP-TTĐT ngày 06/3/2025 của Sở Văn hóa, Thể thao
              và Du lịch
            </p>
            <p>© Bản quyền thuộc về Cổng thông tin điện tử Tỉnh ủy Vĩnh Long</p>
            <a className="block" href="https://ngn.vn/">
              © Powered by
              <img
                className="inline-block w-[50px] ml-2 "
                srcSet="images/icons/ngn.png 2x"
                alt="NEXT GENERATION NETWORK CORPORATION"
              />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
