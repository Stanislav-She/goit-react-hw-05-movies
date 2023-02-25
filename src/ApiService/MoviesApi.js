import axios from 'axios';

const API_KEY = '6e5639f9d4cb9f087b8042a8acc9c8e2';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export function loadData(page = 1) {
  const response = await.axios(`/trending/movie/week`, {
    params: { api_key: API_KEY },
  });
  return data.results;
}
