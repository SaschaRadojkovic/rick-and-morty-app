export async function fetchPage(page, name) {
  let url = `https://rickandmortyapi.com/api/character/?page=${page}`;
  if (name !== "") {
    url = `${url}&name=${encodeURIComponent(name)}`;
  }
  const response = await fetch(url);
  try {
    const data = await response.json();
    return { data, response };
  } catch (error) {
    console.error(error);
    throw error;
  }
}
