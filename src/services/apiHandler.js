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

export async function searchMovies(str) {
  console.log(str);
  const response = await fetch('https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=%D1%82%D0%B5%D1%80%D0%BC%D0%B8%D0%BD%D0%B0%D1%82%D0%BE%D1%80&page=1', {
    method: 'GET',
    headers: {
      'X-API-KEY': `${apiKey}`,
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
}
