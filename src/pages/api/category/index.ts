import type { NextApiRequest, NextApiResponse } from 'next';

export default function handleCategory(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const dataCategory = {
    categories: [
      {
        id: 'a9d2f3x1c',
        name: 'Giới thiệu',
        alias: 'gioi-thieu',
        type: '',
        subCates: [
          {
            id: '4b8x0fe2r',
            name: 'Đảng bộ Vĩnh Long',
            alias: 'dang-bo-vinh-long',
            type: '',
            subCates: [
              {
                id: '7e2a91ffc',
                name: 'Cơ cấu tổ chức',
                alias: 'co-cau-to-chuc',
                type: '',
              },
              {
                id: '2af9f1x2b',
                name: 'Lịch sử Đảng bộ',
                alias: 'lich-su-dang-bo',
                type: '',
              },
            ],
          },
          {
            id: '9c7d821aa',
            name: 'Thông tin lãnh đạo',
            alias: 'thong-tin-lanh-dao',
            type: '',
          },
          {
            id: '31ac0bb5e',
            name: 'Danh sách phòng ban',
            alias: 'danh-sach-phong-ban',
            type: '',
          },
          {
            id: '88fcb2e9a',
            name: 'Sơ đồ tổ chức',
            alias: 'so-do-to-chuc',
            type: '',
          },
          {
            id: 'df3d4c7ee',
            name: 'Bản đồ du lịch',
            alias: 'ban-do-du-lich',
            type: '',
          },
          {
            id: 'b2e69ddf4',
            name: 'Bản đồ hành chính',
            alias: 'ban-do-hanh-chinh',
            type: '',
          },
          {
            id: 'aa2c171bd',
            name: 'Tổng quan về Vĩnh Long',
            alias: 'tong-quan-ve-vinh-long',
            type: '',
          },
        ],
      },
      {
        id: '6c5f9e44b',
        name: 'Tin tức - Sự kiện',
        alias: 'tin-tuc-va-su-kien',
        type: 'tin-tuc',
        subCates: [
          {
            id: '5d1ff9c34',
            name: 'Kinh tế chính trị',
            alias: 'kinh-te-chinh-tri',
            type: 'tin-tuc',
          },
          {
            id: '11cffa849',
            name: 'Hoạt động lãnh đạo',
            alias: 'hoat-dong-lanh-dao',
            type: 'tin-tuc',
          },
          {
            id: 'a74cfea22',
            name: 'Sự kiện nổi bật',
            alias: 'su-kien-noi-bat',
            type: 'tin-tuc',
          },
          {
            id: 'd47f2231a',
            name: 'Văn hóa xã hội',
            alias: 'van-hoa-xa-hoi',
            type: '',
          },
          {
            id: '90e4ab9c3',
            name: 'Tin trong nước',
            alias: 'tin-trong-nuoc',
            type: 'tin-tuc',
          },
          {
            id: '7d3f1a83b',
            name: 'Tin ngoài nước',
            alias: 'tin-ngoai-nuoc',
            type: 'tin-tuc',
          },
          {
            id: '3b7fdcee7',
            name: 'Xây dựng chính quyền',
            alias: 'xay-dung-chinh-quyen',
            type: 'tin-tuc',
          },
          {
            id: 'f9b374812',
            name: 'Xây dựng Đảng',
            alias: 'xay-dung-dang',
            type: 'tin-tuc',
          },
        ],
      },
      {
        id: '84b1623ca',
        name: 'Thông tin cần biết',
        alias: 'thong-tin-can-biet',
        type: '',
        subCates: [
          {
            id: '5ac23c07f',
            name: 'Hoạt động cấp ủy',
            alias: 'hoat-dong-cap-uy',
            type: '',
          },
          {
            id: '3cfa2d1bb',
            name: 'Thông tin tiện ích',
            alias: 'tien-ich',
            type: '',
          },
          {
            id: 'ab3d1cf2a',
            name: 'Thông tin chuyên đề',
            alias: 'chuyen-de',
            type: '',
          },
          {
            id: 'f8a12f0de',
            name: 'Thông tin chỉ đạo',
            alias: 'chi-dao',
            type: '',
          },
          {
            id: 'e3cd11af0',
            name: 'Thông tin tuyển dụng',
            alias: 'tuyen-dung',
            type: '',
          },
          {
            id: '54fa1eebd',
            name: 'Thông tin cơ sở hạ tầng',
            alias: 'co-so-ha-tang',
            type: '',
          },
          {
            id: '8cb9f32ea',
            name: 'Thông tin cơ sở tôn giáo',
            alias: 'co-so-ton-giao',
            type: '',
          },
          {
            id: 'c7a40de53',
            name: 'Thông tin khen thưởng, xử phạt',
            alias: 'khen-thuong-va-xu-phat',
            type: '',
          },
          {
            id: 'a11cb12e6',
            name: 'Thông tin địa lý, tài nguyên, thiên nhiên',
            alias: 'dia-ly-va-tai-nguyen',
            type: '',
          },
          {
            id: 'b6d9a0c18',
            name: 'Thông tin hướng dẫn, trao đổi nghiệp vụ',
            alias: 'nghiep-vu',
            type: '',
          },
          { id: '093cf7d84', name: 'Liên hệ', alias: 'lien-he', type: '' },
          {
            id: '2f6ecaa72',
            name: 'Ý kiến xử lý',
            alias: 'y-kien-xu-ly',
            type: '',
          },
        ],
      },
      {
        id: 'cc3f1a0b2',
        name: 'Hỏi đáp - Góp ý',
        alias: 'hoi-dap-gop-y',
        type: '',
        subCates: [
          {
            id: '02fb7aaf4',
            name: 'Bình chọn trực tuyến',
            alias: 'binh-chon-truc-tuyen',
            type: '',
          },
          {
            id: '7ada134fa',
            name: 'Giao lưu trực tuyến',
            alias: 'giao-luu-truc-tuyen',
            type: '',
          },
        ],
      },
      {
        id: 'cf8ec7a90',
        name: 'Văn kiện tư liệu',
        alias: 'van-kien-tu-lieu',
        type: '',
        subCates: [
          { id: '9e3a1bf32', name: 'Audio', alias: 'audio', type: '' },
          { id: '61f9c845e', name: 'Video', alias: 'video', type: '' },
          {
            id: 'b5f77ac94',
            name: 'Thư viện ảnh',
            alias: 'thu-vien-anh',
            type: '',
          },
          {
            id: '497cda82c',
            name: 'Văn bản của Đảng',
            alias: 'van-ban-cua-dang',
            type: '',
          },
          {
            id: '23eae988f',
            name: 'Văn bản pháp quy',
            alias: 'van-ban-phap-quy',
            type: '',
          },
        ],
      },
      {
        id: 'c2184fa3b',
        name: 'Tin tức',
        alias: 'tin-tuc',
        type: '',
        subCates: [
          {
            id: '117ba6439',
            name: 'Bản tin thị trường ngày 20/2',
            alias: 'ban-tin-thi-truong-20240220',
            type: '',
          },
          { id: 'dc94820aa', name: '...', alias: 'khac', type: '' },
        ],
      },
      {
        id: '08d63c1bb',
        name: 'Liên hệ',
        alias: 'lien-he',
        type: '',
      },
      {
        id: '763c72a0f',
        name: 'Sitemap',
        alias: 'sitemap',
        type: '',
      },
    ],
  };

  res.status(200).json(dataCategory);
}
