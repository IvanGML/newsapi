import { getElement } from './helpers';

// DOM ELEMENTS
const newsSourcesContainer = getElement('#load-news-sources');
const articlesContainer = getElement('#load-articles');
const searchInput = getElement('#search-input');
const searchButton = getElement('#search-button');
const headingTitle = getElement('#heading-title');
const resultList = getElement('#result-list');

// api KEY
const API_KEY = 'f792cbef6ef14ad0b093ab88c321ea24';

export {
  newsSourcesContainer, 
  articlesContainer, 
  searchInput, 
  searchButton, 
  headingTitle, 
  resultList,
  API_KEY,
}
