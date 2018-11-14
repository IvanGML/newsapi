import { showProloader } from "../stuff/helpers";
import { articleComponent } from "./article";
import { fetchArticles } from '../requests/fetchArticles';

export const renderArticles = ({ country, sources, keyWord, renderHtml }) => {
  let loadingContainer = document.getElementById('result-list');
  showProloader();
  fetchArticles({country, sources, keyWord})
    .then(data => {
      let { articles } = data;
      let articlesList = articles.map(item => articleComponent(item));
      loadingContainer.innerHTML = articlesList;
    });
}
