import type { NextApiRequest, NextApiResponse } from 'next';

export default function handlerCatePage(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const catePage = {
    status: 200,
    result: {
      page: 'DetailPage',
      name: 'Trang chi tiết',
      blocks: [
        {
          name: 'DetailHead',
          sections: [
            {
              name: 'DetailHead_Side',
              listType: 'Tin hỗn hợp',
              cateId: null,
              cateAlias: null,
              title: 'Tin nổi bật',
              isDisplayOnPage: true,
              includeChildCate: true,
              skip: 0,
              displayRatio: '16/9',
              randomArrange: false,
              displayOnPage: true,
            },
          ],
        },
        {
          name: 'DetailFoot',
          sections: [
            {
              name: 'DetailFoot_Side',
              listType: 'Tin hỗn hợp',
              cateId: null,
              cateAlias: null,
              title: 'Tin nổi bật',
              isDisplayOnPage: true,
              includeChildCate: true,
              skip: 0,
              displayRatio: '16/9',
              randomArrange: false,
              displayOnPage: true,
            },
          ],
        },
      ],
    },
  };

  res.status(200).json(catePage);
}
