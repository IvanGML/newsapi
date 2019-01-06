import { newsSourcesContainer, articlesContainer, searchInput, searchButton, headingTitle, resultList } from '../stuff/constants';

export default class Initializer {
  constructor(renderer, dataService) {
    this.renderer = renderer;
    this.dataService = dataService;
    this.initialize = this.initialize.bind(this);
  }

  initialize() {
    articlesContainer.addEventListener('click', () => this.renderer.renderArticles({
      fetchData: this.dataService.getData,
      requestData: { country: 'us' },
    }));

    newsSourcesContainer.addEventListener('click', () =>
      this.renderer.renderNewsSources(this.dataService.getData));

    searchInput.addEventListener('keydown', e => {
      if (e.keyCode === 27) e.target.value = '';
      if (e.keyCode === 13 && e.target.value !== '') {
        this.renderer.renderArticles({
          fetchData: this.dataService.getData,
          requestData: { keyWord: e.target.value },
        })
      }
    });

    searchButton.addEventListener('click', () => searchInput.value !== '' ? this.renderer.renderArticles({
      fetchData: this.dataService.getData,
      requestData: { keyWord: searchInput.value },
    }) : null);
    
    headingTitle.addEventListener('click', () => resultList.innerHTML = '');
  }
}
