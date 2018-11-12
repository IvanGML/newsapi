import { articleComponent } from "./article";
import { newsSourcesComponent } from "./newsSource";

let loadingContainer = document.getElementById('result-list');

export const renderArticles = (data) => {
  let { articles } = data;
  let articlesList = articles.map(item => {
    return articleComponent(item);
  });
  loadingContainer.innerHTML = articlesList;
}

export const renderSources = (data) => {
  let { sources } = data;
  let sourcesList = newsSourcesComponent(sources);
  loadingContainer.innerHTML = sourcesList;
}
