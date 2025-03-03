import apiKey from '../../config';

// import { API_KEY, BASE_URL } from '../../config';

export async function getMoviesList() {
  const response = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
    method: 'GET',
    headers: {
      'X-API-KEY': `${apiKey}`,
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
}
