const fetchOptions = { next: { revalidate: 300 } };

export async function fetchServerArticleList() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NTV_BASE_URL}/public/article/listing?limit=4&skip=3&isFeature=true&sort=isFeatured%3Ddesc,publicationTime%3Ddesc&tag=&categoryId=&type=&includeChildCate=true&isRandomArrange=false`,
      fetchOptions
    );
    const data = await response.json();
    const { result } = data;
    if (result) {
      return result;
    }
    if (!response.ok) {
      throw new Error('Lỗi get category list');
    }
  } catch (error) {
    console.log(error);
  }
}
