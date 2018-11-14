import { toggleTabs } from "./dinamic-elements-events/toggler";
import { newsItemClickHandler } from "./dinamic-elements-events/newsItemClickHandler";
import { showProloader } from "../stuff/helpers";
import { newsSourcesComponent } from "./newsSource";
import { fetchNewsSources } from "../requests/fetchNewsSources";

export const renderNewsSources = () => {

  let loadingContainer = document.getElementById('result-list');
 
  showProloader();
  fetchNewsSources()
    .then(data => {
      let { sources } = data;
      let sourcesList = newsSourcesComponent(sources);
      loadingContainer.innerHTML = sourcesList;
      toggleTabs();
      newsItemClickHandler();
    });
}
