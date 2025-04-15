import Container from '@/components/Container/Container';
import Header from '@/components/Header';
import HomeA from '@/components/Page/HomePage/HomeA';
import HomeB from '@/components/Page/HomePage/HomeB';
import HomeC from '@/components/Page/HomePage/HomeC';
import HomeD from '@/components/Page/HomePage/HomeD';
import HomeE from '@/components/Page/HomePage/HomeE';
import HomeF from '@/components/Page/HomePage/HomeF';
import HomeG from '@/components/Page/HomePage/HomeG';
import HomeH from '@/components/Page/HomePage/HomeH';
import { fetchServerArticleList } from '@/Services/articleService';
import { fetchServerCategoryList } from '@/Services/categoryService';

export default async function Home() {
  const dataCategory = await fetchServerCategoryList();
  const dataArticle = await fetchServerArticleList();
  return (
    <Container>
      <Header dataCategory={dataCategory} />
      <HomeA posts={dataArticle} />
      <HomeB posts={dataArticle} />
      <HomeC posts={dataArticle} />
      <HomeD posts={dataArticle} />
      <HomeC posts={dataArticle} />
      <HomeE posts={dataArticle} />
      <HomeC posts={dataArticle} />
      <HomeF posts={dataArticle} />
      <HomeG posts={dataArticle} />
      <HomeH posts={dataArticle} />
    </Container>
  );
}
