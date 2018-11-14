import { showProloader } from "../stuff/helpers";
import { articleComponent } from "./article";
import { fetchData } from '../requests/fetchData';

export const renderArticles = ({ country, sources, keyWord }) => {
  let loadingContainer = document.getElementById('result-list');
  showProloader();
  fetchData({country, sources, keyWord})
    .then(data => {
      let { articles } = data;
      let articlesList = articles.map(item => articleComponent(item));
      loadingContainer.innerHTML = articlesList;
    });
}
