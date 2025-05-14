import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
export const useFetchMediaById = (mediaId: string) => {
  return useQuery({
    queryKey: ['ads-media', mediaId],
    queryFn: ({ signal }) => fetchMediaById({ signal, mediaId }),
    enabled: !!mediaId,
  });
};
export async function fetchMediaById({
  signal,
  mediaId,
}: {
  signal: AbortSignal;
  mediaId: string;
}) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_VL_BASE_URL}/public/common/media/${mediaId}`,
      // `${process.env.NEXT_PUBLIC_NTV_TEST_URL}/public/common/media/${mediaId}`,
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
