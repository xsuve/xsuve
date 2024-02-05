export function formatProjectCategory(category: string) {
  return category.toLowerCase().replace(' ', '-');
}

export async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch data.');
  }

  return response.json();
}

export function randomIndexBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
