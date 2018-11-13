import { showProloader } from "../utils/helpers";

export const fetchArticles = ({ country, sources, keyWord, renderArticles }) => {
  let url = '';

  if (sources) url = `https://newsapi.org/v2/top-headlines?sources=${sources.trim()}&apiKey=f792cbef6ef14ad0b093ab88c321ea24`;
  if (country) url = `https://newsapi.org/v2/top-headlines?country=${country.trim()}&apiKey=f792cbef6ef14ad0b093ab88c321ea24`;
  if (keyWord) url = `https://newsapi.org/v2/everything?q=${keyWord.trim()}&apiKey=f792cbef6ef14ad0b093ab88c321ea24`;

  let req = new Request(url);
  
  showProloader();
  
  fetch(req)
    .then(response => response.json())
    .then(data => {
      renderArticles(data);
    });
}
