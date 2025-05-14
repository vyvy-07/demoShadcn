const fetchOptions = { next: { revalidate: 300 } };

export async function fetchLayoutPage(pageName: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_VL_BASE_URL}/public/layout/${pageName}`,
      fetchOptions
    );
    const data = await response.json();
    if (data) {
      return data;
    }
    if (!response.ok) {
      throw new Error('Lỗi get layout');
    }
  } catch (error) {
    console.log(error);
  }
}
