export async function getBooks() {
  const response = await fetch(
  "https://openlibrary.org/search.json?q=javascript&limit=20",
  {
    cache: "force-cache",
  }
);

  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  const data = await response.json();

  return data?.docs || [];
}