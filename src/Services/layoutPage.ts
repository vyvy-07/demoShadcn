const fetchOptions = { next: { revalidate: 300 } };

export async function fetchLayoutPage(pageName: string) {
  try {
    const response = await fetch(`/api/${pageName}`, fetchOptions);
    const data = await response.json();
    if (data) {
      return data;
    }
    if (!response.ok) {
      throw new Error('Lỗi get category list');
    }
  } catch (error) {
    console.log(error);
  }
}
