const fetchOptions = { next: { revalidate: 300 } };

export async function fetchServerCategoryList() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NTV_BASE_URL_LC}/api/category`,
      // `${process.env.NEXT_PUBLIC_NTV_BASE_URL}/public/category/list`,
      fetchOptions

      // fetchOptions
    );
    const data = await response.json();
    console.log('data :>> ', data);
    const { categories } = data;
    if (categories) {
      return categories;
    }
    if (!response.ok) {
      throw new Error('Lỗi get category list');
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}
