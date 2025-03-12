import API_KEY from '../../config';

const BASE_URL = 'https://api.themoviedb.org/3';

const YOUR_API = 'Write your API here';

const API_KEY_VAR = API_KEY ? API_KEY : YOUR_API;

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY_VAR}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async query => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY_VAR}&query=${encodeURIComponent(query)}`);
  const data = await response.json();
  return data.results;
};
