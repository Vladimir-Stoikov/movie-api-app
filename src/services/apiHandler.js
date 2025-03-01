import apiKey from '../../config';

// import { API_KEY, BASE_URL } from '../../config';

export async function getMoviesList() {
  const response = await fetch(`${apiKey}`);
  const data = await response.json();
  return data;
}
