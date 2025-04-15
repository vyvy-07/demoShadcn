import type { AppProps } from 'next/app';
import './globals.css'; // <-- dòng này là BẮT BUỘC với Pages Router
import { useEffect, useState } from 'react';
import { fetchServerCategoryList } from '@/Services/categoryService';
import type { Category } from '@/interface/category';
import Header from '@/components/Header';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [listCates, setListCates] = useState<Category[]>();

  useEffect(() => {
    const getListCate = async () => {
      try {
        const data = await fetchServerCategoryList();
        setListCates(data);
      } catch (error) {
        console.log('error :>> ', error);
      }
    };
    getListCate();
  }, []);
  return (
    // <Header dataCategory={listCates} />
    <Component {...pageProps} />
  );
}
