import type { QueryType } from '@/interface/queryType';
import {
  fetchCateDocxList,
  fetchDocxList,
} from '@/Services/ClientServices/docx';
import { useQuery } from '@tanstack/react-query';

export const useFetchDocxList = (params: QueryType) => {
  return useQuery({
    queryKey: ['docxList'],
    queryFn: ({ signal }) => fetchDocxList({ signal, params }),
    enabled: !!params,
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
