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
const ListDocxSide = () => {
  return (
    <div>
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
  );
};

export default ListDocxSide;
