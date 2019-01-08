import { showPreloader } from "../stuff/helpers";
import { articleComponent } from "../view/article";
import { newsSourcesComponent } from "../view/newsSource";
import { toggleTabs } from "../view/dinamic-elements-events/toggler";
import { newsItemClickHandler } from "../view/dinamic-elements-events/newsItemClickHandler";
import { resultList } from '../stuff/constants';

export default class Renderer {
  constructor() {
    this.renderArticles = this.renderArticles.bind(this);
    this.renderNewsSources = this.renderNewsSources.bind(this);
  }

  renderArticles({fetchData, requestData}) {
    showPreloader();
    fetchData(requestData)
      .then(data => {
        let { articles } = data;
        let articlesList = articles.map(item => articleComponent(item));
        resultList.innerHTML = articlesList;
      });
  }

  renderNewsSources(fetchData) {
    showPreloader();
    fetchData({})
      .then(data => {
        let { sources } = data;
        let sourcesList = newsSourcesComponent(sources);
        resultList.innerHTML = sourcesList;
        toggleTabs();
        newsItemClickHandler(this.renderArticles, fetchData);
      });
  }

}
