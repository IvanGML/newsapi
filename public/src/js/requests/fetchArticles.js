import { API_KEY } from '../stuff/constants';

async function fetchArticles({country, sources, keyWord}) {
  let url = '';

  if (sources) url = `https://newsapi.org/v2/top-headlines?sources=${sources.trim()}&apiKey=${API_KEY}`;
  if (country) url = `https://newsapi.org/v2/top-headlines?country=${country.trim()}&apiKey=${API_KEY}`;
  if (keyWord) url = `https://newsapi.org/v2/everything?q=${keyWord.trim()}&apiKey=${API_KEY}`;

  let req = new Request(url);

  return await fetch(req)
    .then(response => response.json())
}

export { fetchArticles };
