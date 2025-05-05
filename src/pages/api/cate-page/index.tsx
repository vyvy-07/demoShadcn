import type { NextApiRequest, NextApiResponse } from 'next';

export default function handlerCatePage(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const catePage = {
    status: 200,
    result: {
      page: 'CateParentPage',
      name: 'Trang loại tin',
      blocks: [
        {
          name: 'CateHead',
          sections: [
            {
              name: 'CateHead_Main',
              listType: 'Tin hỗn hợp',
              cateId: null,
              cateAlias: null,
              title: '',
              isDisplayOnPage: true,
              includeChildCate: true,
              skip: 0,
              displayRatio: '16/9',
              randomArrange: false,
              displayOnPage: true,
            },
            {
              name: 'CateHead_Side',
              listType: 'Tin nổi bật',
              cateId: null,
              cateAlias: null,
              title: 'Nổi bật',
              isDisplayOnPage: false,
              includeChildCate: true,
              skip: 0,
              displayRatio: '16/9',
              randomArrange: false,
              displayOnPage: false,
            },
          ],
        },
      ],
    },
  };

  res.status(200).json(catePage);
}
