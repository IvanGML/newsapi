import { fetchArticles } from "./requests/fetchArticles";
import { fetchNewsSources } from "./requests/fetchNewsSources";
import { renderArticles } from "./components/render";
import { renderSources } from "./components/render";

const newsSourcesContainer = document.getElementById('load-news-sources');
const articlesContainer = document.getElementById('load-articles');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const headingTitle = document.getElementById('heading-title');
const resultList = document.getElementById('result-list');

newsSourcesContainer.addEventListener('click', () => fetchNewsSources(renderSources));
articlesContainer.addEventListener('click', () => fetchArticles({country:'us', renderArticles}));
searchInput.addEventListener('keydown', e => {
  if (e.keyCode === 27) e.target.value = '';
  if (e.keyCode === 13 && e.target.value !== '') fetchArticles({keyWord: e.target.value, renderArticles});
});
searchButton.addEventListener('click', () => searchInput.value !== '' ? fetchArticles({keyWord: searchInput.value, renderArticles}) : null);
headingTitle.addEventListener('click', () => resultList.innerHTML = '');





