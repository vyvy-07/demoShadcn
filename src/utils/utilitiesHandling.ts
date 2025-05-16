import { SPECIAL_PATH } from '@/constant/dataVinhLong/specialPath';
import type { QueryType } from '@/interface/queryType';

export const getLinkToCatePage = (cateAlias: string) => {
  const res = SPECIAL_PATH.some((item) => item?.alias === cateAlias);
  if (res) {
    return `/${cateAlias}`;
  } else return `/danh-muc/${cateAlias}`;
};

export const convertDisplayRatio = (displayRatio: any) => {
  return displayRatio === 'ratioDefault' ? '3/2' : displayRatio;
};

export const parseParams = (objList: QueryType, limit: number) => {
  let queryParams: QueryType = {};
  queryParams.limit = limit;
  queryParams.skip = objList?.skip ?? 0;
  switch (objList?.listType ?? '') {
    case 'Tin nổi bật':
      queryParams.isFeature = true;
      queryParams.sort = 'isFeatured=desc,publicationTime=desc';
      break;
    case 'Xem nhiều nhất':
      queryParams.isFeature = false;
      queryParams.sort = 'viewTop=desc';
      break;
    case 'Tương tác nhiều nhất':
      queryParams.isFeature = true;
      queryParams.sort = 'commentCount=desc,publicationTime=desc';
      break;
    case 'Tin hỗn hợp':
      queryParams.sort = 'publicationTime=desc,isFeatured=desc';
      break;
    default:
      queryParams.isFeature = false;
      queryParams.sort = 'publicationTime=desc,isFeature=false';
  }
  queryParams.tag = objList?.tag ?? '';
  queryParams.categoryId = objList?.cateId ?? objList?.cateAlias ?? '';
  queryParams.type = objList?.type ?? '';
  queryParams.includeChildCate = objList?.includeChildCate ?? true;
  queryParams.isRandomArrange = objList?.randomArrange ?? false;
  return queryParams;
};

export const fixPostContent = (postContent: any) => {
  return postContent
    .split('<figcaption class="text-caption"><p>&nbsp;</p></figcaption>')
    .join('')
    .split('<figcaption class="text-caption">&nbsp;</figcaption>')
    .join('')
    .replace(/contenteditable="true"/g, 'contenteditable="false"');
};

export const getPostDetailUrl = (type: string, alias: string, id = '') => {
  switch (type) {
    case 'Emagazine':
      return `/emagazine/${alias}${id && `-${id}`}.ngn`;
    case 'Video':
      return `/video/${alias}${id && `-${id}`}.ngn`;
    case 'Phóng sự ảnh':
      return `/phong-su-anh/${alias}${id && `-${id}`}.ngn`;
    case 'Infographic':
      return `/infographic/${alias}${id && `-${id}`}.ngn`;
    case 'Tạp chí giấy':
      return `/tap-chi-in/${alias}${id && `-${id}`}.ngn`;
    case 'Audio':
      return `/podcast/${alias}${id && `-${id}`}.ngn`;
    default:
      return `/${alias}${id && `-${id}`}.ngn`;
  }
};
export const formatCatePath = (type = '', alias?: string, id = '') => {
  switch (type) {
    case 'TinTuc':
      return `/tin-tuc-va-su-kien/${alias}`;
    case 'Tạp chí giấy':
      return `/tap-chi-in/${alias}${id && `-${id}`}.ngn`;
    case 'Audio':
      return `/podcast/${alias}${id && `-${id}`}.ngn`;
    case 'VanKien':
      return `/van-kien/${alias}${id && `-${id}`}.ngn`;
    default:
      return `/${alias}`;
  }
};

export const formatBookmarkParams = (params: any) => {
  const {
    itemTarget,
    type,
    itemType,
    limit,
    initSkipParam,
    nextFetchSkipParam,
  } = params;

  if (itemType === '') {
    return {
      itemTarget,
      type,
      limit,
      initSkipParam,
      nextFetchSkipParam,
    };
  }

  return params;
};

export const createQueryString = (name: string, value: any) => {
  const params = new URLSearchParams();
  params.set(name, value);

  return params.toString();
};
export const transformBlocks = (
  blocks: { name: string; sections: any[] }[]
) => {
  return blocks.reduce((acc, block) => {
    const sectionMap = block.sections.reduce((sectionAcc, section) => {
      const { name, ...rest } = section;
      sectionAcc[name] = {
        ...rest,
        sectionName: block.name, // Tiêm sectionName vào mỗi section
      };
      return sectionAcc;
    }, {} as Record<string, any>);

    acc[block.name] = sectionMap;
    return acc;
  }, {} as Record<string, any>);
};
