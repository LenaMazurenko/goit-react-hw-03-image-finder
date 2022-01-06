export default function fetchQuery(query, page) {
  const key =
    '24022997-1f6b45243be8e45a3cc65a02f&image_type=photo&orientation=horizontal&per_page=12';
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}`,
  ).then(response => response.json());
}
