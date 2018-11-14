import { renderArticles } from "./components/renderArticles";
import { renderNewsSources } from "./components/renderNewsSources";
import { newsSourcesContainer, articlesContainer, searchInput, searchButton, headingTitle, resultList } from './stuff/constants';

newsSourcesContainer.addEventListener('click', () => renderNewsSources());
articlesContainer.addEventListener('click', () => renderArticles({ country: 'us' }));
searchInput.addEventListener('keydown', e => {
  if (e.keyCode === 27) e.target.value = '';
  if (e.keyCode === 13 && e.target.value !== '') renderArticles({ keyWord: e.target.value });
});
searchButton.addEventListener('click', () => searchInput.value !== '' ? renderArticles({ keyWord: searchInput.value }) : null);
headingTitle.addEventListener('click', () => resultList.innerHTML = '');
