import type { QueryType } from '@/interface/queryType';
import axios from 'axios';

const fetchOptions = { next: { revalidate: 300 } };

export async function fetchDocxList({ params }: { params: QueryType }) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_NTV_BASE_URL}/public/modules/docs/get-list-docs`,
      {
        params,
      }
    );
    if (response) {
      const { result } = response.data;
      return result;
    }
  } catch (error) {
    console.log(error);
  }
}
