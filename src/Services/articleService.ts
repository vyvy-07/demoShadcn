import { parseParams } from '@/utils/utilitiesHandling';

const fetchOptions = { next: { revalidate: 300 } };

export async function fetchServerArticleList(listQuery: any, limit: number) {
  try {
    const params = await parseParams(listQuery, limit);
    const queryString = new URLSearchParams(params as any).toString();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_VL_BASE_URL_TEST}/public/article/listing?${queryString}`,
      fetchOptions
    );
    const data = await response.json();
    const { result } = data;
    if (result) {
      return result;
    }
    if (!response.ok) {
      throw new Error('Lỗi get category list');
    }
  } catch (error) {
    console.log(error);
  }
}

export async function fetchServerArticleDetail(articleId: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_VL_BASE_URL_TEST}/public/article/${articleId}`,
      fetchOptions
    );
    const data = await response.json();
    const { result } = data;
    if (result) {
      return result;
    }
    if (!response.ok) {
      throw new Error('Lỗi get category id');
    }
  } catch (error) {
    console.log(error);
  }
}
