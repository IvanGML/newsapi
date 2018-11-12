import { fetchArticles } from "./requests/fetchArticles";
import { fetchNewsSources } from "./requests/fetchNewsSources";
import { renderArticles } from "./components/render";
import { renderSources } from "./components/render";

const newsSourcesContainer = document.getElementById('load-news-sources');
const articlesContainer = document.getElementById('load-articles');
const searchInput = document.getElementById('search-input');

newsSourcesContainer.addEventListener('click', () => fetchNewsSources(renderSources));
articlesContainer.addEventListener('click', () => fetchArticles({country:'us', renderArticles}));
searchInput.addEventListener('keydown', e => 
  (e.keyCode === 13 && e.target.value !== '') 
  ? fetchArticles({keyWord: e.target.value, renderArticles}) 
  : null);




