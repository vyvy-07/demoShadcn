const fetchOptions = { next: { revalidate: 300 } };

export async function fetchLayoutPage(pageName: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NTV_BASE_URL_LC}/${pageName}`,
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
