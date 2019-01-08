import { Warning } from '../stuff/helpers';

async function request({country, sources, keyWord, apiKey}) {
  console.log(country, sources, keyWord, apiKey);
  let url = `https://newsapi.org/v2/sources?apiKey=${apiKey}`;

  if (sources) url = `https://newsapi.org/v2/top-headlines?sources=${sources.trim()}&apiKey=${apiKey}`;
  if (country) url = `https://newsapi.org/v2/top-headlines?country=${country.trim()}&apiKey=${apiKey}`;
  if (keyWord) url = `https://newsapi.org/v2/everything?q=${keyWord.trim()}&apiKey=${apiKey}`;

  let request = new Request(url);

  return await fetch(request)
    .then(response => response.json())
    .catch(error => {
      console.log(error.message);
      const warning = new Warning();
      warning.showWarning();
    });
}

export default request;
