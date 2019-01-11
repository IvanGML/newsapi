import reducer from './model/reducer';
import Store, { initialState } from './model/store';
import { newsSourcesContainer, articlesContainer, searchInput, searchButton, headingTitle, resultList, API_KEY as apiKey } from './stuff/constants';
import { articleComponent } from "./view/article";
import request from './services/fetchData';
import { showPreloader } from './stuff/helpers';

const store = new Store(reducer, initialState);
store.subscribe(()=>console.log(store.state));

articlesContainer.addEventListener('click', () => {
  request({apiKey, country: 'us'})
    .then(payload => store.update({type: 'GET_NEWS', payload }))
    .then(()=>{
      showPreloader();
      let articlesList = store.state.news.articles.map(item => articleComponent(item));
      resultList.innerHTML = articlesList;
    })
});
