import type { QueryType } from '@/interface/queryType';
import {
  fetchAttachmentsDocx,
  fetchCateDocxList,
  fetchDocxList,
} from '@/Services/ClientServices/docx';
import { useQuery } from '@tanstack/react-query';

export const useFetchDocxList = (params: any, isEnable: boolean) => {
  return useQuery({
    queryKey: ['docxList'],
    queryFn: ({ signal }) => fetchDocxList({ signal, params }),
    enabled: isEnable,
  });
};
let initParams = { limit: -1, keyword: null, skip: 0 };
export const useFetchCateDocxList = (params = initParams) => {
  return useQuery({
    queryKey: ['cateDocx'],
    queryFn: ({ signal }) => fetchCateDocxList({ signal, params }),
    enabled: !!params,
  });
};

export const useFetchAttachmentsDocx = (docId: string, isEnable: boolean) => {
  return useQuery({
    queryKey: ['attachmentsDocx', docId],
    queryFn: ({ signal }) => fetchAttachmentsDocx({ signal, docId }),
    enabled: !!isEnable,
  });
};
