import type { QueryType } from '@/interface/queryType';
import axios from 'axios';

export async function fetchDocxList({
  params,
  signal,
}: {
  params: QueryType;
  signal: AbortSignal;
}) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_VL_BASE_URL}/public/modules/docs/get-list-docs`,
      {
        signal,
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

export async function fetchCateDocxList({
  signal,
  params,
}: {
  signal: AbortSignal;
  params: QueryType;
}) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_VL_BASE_URL}/public/modules/docs/get-list-categories`,
      {
        signal,
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
export async function fetchAttachmentsDocx({
  signal,
  docId,
}: {
  signal: AbortSignal;
  docId: string;
}) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_VL_BASE_URL}/public/modules/docs/get-attachments/${docId}`,
      {
        signal,
      }
    );
    if (response) {
      const { result } = response.data;
      return result;
    }
  } catch (error) {
    console.log('Lỗi tệp đính kèm', error);
  }
}
