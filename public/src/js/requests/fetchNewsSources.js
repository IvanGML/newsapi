import { API_KEY } from '../stuff/constants';

async function fetchNewsSources() {

  let url = `https://newsapi.org/v2/sources?apiKey=${API_KEY}`;
  let req = new Request(url);

  return await fetch(req)
    .then(response => response.json())
    .catch(error => console.log(error.message));
}

export { fetchNewsSources };
