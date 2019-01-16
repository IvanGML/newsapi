import reducer from './model/reducer';
import fetchInfo from './model/actions';
import Store, { initialState } from './model/store';
import { newsSourcesContainer, articlesContainer, searchInput, searchButton, headingTitle, resultList, API_KEY as apiKey } from './stuff/constants';
import { articleComponent } from "./view/article";
import { newsSourcesComponent } from "./view/newsSource";
import { toggleTabs } from "./view/dinamic-elements-events/toggler";
import request from './services/fetchData';
import { showPreloader } from './stuff/helpers';

const store = new Store(reducer, initialState);
store.subscribe(()=>console.log(store.state));

articlesContainer.addEventListener('click', () => { 
  fetchInfo({request, country: 'us'})
    .then(result => store.update(result))
    .then(() => {
      showPreloader();
      let articlesList = store.state.news.articles.map(item => articleComponent(item));
      resultList.innerHTML = articlesList;
    })
});


newsSourcesContainer.addEventListener('click', () => { 
  fetchInfo({request})
    .then(result => {
      console.log('result', result);
      store.update(result)})
    .then(() => {
      showPreloader();
      let sourcesList = newsSourcesComponent(store.state.sources.sources);
      resultList.innerHTML = sourcesList;
      toggleTabs();
    })
});
