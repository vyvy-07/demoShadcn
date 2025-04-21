import { parseParams } from '@/utils/utilitiesHandling';

const fetchOptions = { next: { revalidate: 300 } };

export async function fetchServerArticleList(listQuery: any, limit: number) {
  try {
    const params = await parseParams(listQuery, limit);
    const queryString = new URLSearchParams(params as any).toString();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NTV_BASE_URL}/public/article/listing?${queryString}`,
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
