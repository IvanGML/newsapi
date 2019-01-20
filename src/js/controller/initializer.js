import reducer from '../model/reducer';
import fetchInfo from '../model/actions';
import createStore, { initialState } from '../model/store';
import { newsSourcesContainer, articlesContainer, searchInput, searchButton, headingTitle, resultList, API_KEY as apiKey } from '../stuff/constants';
import { articleComponent } from "../view/article";
import { newsSourcesComponent } from "../view/newsSource";
import { toggleTabs } from "../view/dinamic-elements-events/toggler";
import request from '../services/fetchData';
import { showPreloader, handleImputKeyDown } from '../stuff/helpers';

const store = createStore(reducer, initialState);
store.subscribe(()=>console.log(store.getState()));

// TODO - avoid code dublication

// const addListener = (elem, event, params) => {
//     elem.addEventListener(event, e => {
//         fetchInfo({
//                 request,
//                 ...params
//             })
//             .then(result => store.dispatch(result))
//             .then(() => {
//                 showPreloader();
//                 // console.log(params);
//                 // console.log(params.length);
//                 let renderedHtml = isEmpty(params) ?
//                     newsSourcesComponent(store.getState().sources.sources) : 
//                     /* rewrite methods to the same use (cat map) */
//                     store.getState().news.articles.map(item => articleComponent(item));
//                 resultList.innerHTML = renderedHtml;
//                 isEmpty(params) && toggleTabs();
//             })
//     });
// }

// addListener(articlesContainer, 'click', {country: 'us'});
// addListener(newsSourcesContainer, 'click', {});
// addListener(searchInput, 'keydown', {keyWord: 'keyWord'});

export default class Initializer {
    constructor() {
      this.initialize = this.initialize.bind(this);
    }
  
    initialize() {
        articlesContainer.addEventListener('click', () => {
        fetchInfo({request, country: 'us'})
            .then(result => store.dispatch(result))
            .then(() => {
                showPreloader();
                resultList.innerHTML = store.getState().news.articles.map(item => articleComponent(item));
            })
        });
  
        newsSourcesContainer.addEventListener('click', () =>
            fetchInfo({request})
                .then(result => store.dispatch(result))
                .then(() => {
                    showPreloader();
                    resultList.innerHTML = newsSourcesComponent(store.getState().sources.sources);
                    toggleTabs();
                })
        );

        searchInput.addEventListener('keydown', e => {
            let keyWord = handleImputKeyDown(e);
            if (e.keyCode === 13 && e.target.value !== '') {
                fetchInfo({request, keyWord: handleImputKeyDown(e)})
                    .then(result => store.dispatch(result))
                    .then(() => {
                        showPreloader();
                        resultList.innerHTML = store.getState().news.articles.map(item => articleComponent(item));
                    })
                }
            });

        searchButton.addEventListener('click', () => searchInput.value !== '' ? 
            fetchInfo({request, keyWord: searchInput.value})
                .then(result => store.dispatch(result))
                .then(() => {
                    showPreloader();
                    resultList.innerHTML = store.getState().news.articles.map(item => articleComponent(item));
                })
            : null);

        headingTitle.addEventListener('click', () => resultList.innerHTML = '');

    }
}
