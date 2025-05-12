import axios from 'axios';

export async function fetchCategory({
  signal,
  cateId,
}: {
  signal: AbortSignal;
  cateId: string;
}) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_NTV_BASE_URL}/public/category/${cateId}`,
      {
        signal,
      }
    );

    const { result } = response.data;
    if (result) {
      return response?.data?.result;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function fetchCategoryList({ signal }: { signal: AbortSignal }) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_NTV_BASE_URL}/public/category/list`,
      {
        signal,
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
