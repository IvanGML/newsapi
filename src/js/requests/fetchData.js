import { API_KEY } from '../stuff/constants';

async function fetchData({country, sources, keyWord}) {
  let url = `https://newsapi.org/v2/sources?apiKey=${API_KEY}`;

  if (sources) url = `https://newsapi.org/v2/top-headlines?sources=${sources.trim()}&apiKey=${API_KEY}`;
  if (country) url = `https://newsapi.org/v2/top-headlines?country=${country.trim()}&apiKey=${API_KEY}`;
  if (keyWord) url = `https://newsapi.org/v2/everything?q=${keyWord.trim()}&apiKey=${API_KEY}`;

  let request = new Request(url);

  return await fetch(request)
    .then(response => response.json())
    .catch(error => console.log(error.message));
}

export { fetchData };
