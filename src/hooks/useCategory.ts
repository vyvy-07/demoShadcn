import { useQuery } from '@tanstack/react-query';
import {
  fetchCategory,
  fetchCategoryList,
} from '../Services/ClientServices/category';

export const useFetchCategory = (cateId: string) => {
  return useQuery({
    queryKey: ['categories', cateId],
    queryFn: ({ signal }) => fetchCategory({ signal, cateId }),
    enabled: !!cateId,
  });
};

export const useFetchCategoryList = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: ({ signal }) => fetchCategoryList({ signal }),
  });
};
