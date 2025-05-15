import type { QueryType } from '@/interface/queryType';
import axios from 'axios';

export async function fetchArticleList(
  { signal }: { signal: AbortSignal },
  params: QueryType
) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_VL_BASE_URL_TEST}/public/article/listing`,
      {
        signal,
        params,
      }
    );

    const { result } = response.data;

    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchDetailArticle({
  signal,
  articleId,
}: {
  signal: AbortSignal;
  articleId: string;
}) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_VL_BASE_URL}/public/article/${articleId}`,
      {
        signal,
      }
    );

    const { result } = response.data;
    return result;
  } catch (error) {
    console.log(error);
  }
}
