import { countries } from '../stuff/staticData';
import { removeComas } from '../stuff/helpers';

export const newsSourceItem = (title, id = title) => {
  return (
    `<div class="result-item" title="${id}">
      <p class="result-item-title">${title}</p>
    </div>`
  );
};

export const newsSources = (itemsList, itemsListCountries) => {

  const publishersContent =
    `<div id="publishers-info">
      <p class="news-sources-description">
        We crawl and index news articles from over 30,000 news 
        sources and blogs. We also monitor the top and breaking 
        news headlines from the following 138 of the most notable 
        of these sources. You can click through for integration 
        examples.
      </p>
      <div class="news-sources-results" id="news-sources-results">
        ${removeComas(itemsList)}
      </div>
    </div>`;

  const countriesContent =
    `<div id="countries-info" class="not-display"">
      <p class="news-sources-description">
        We curate a list of top headlines for a range of countries. You can click through for integration examples.
      </p>
      <div class="news-sources-results" id="news-sources-results">
        ${removeComas(itemsListCountries)}
      </div>
    </div>`;


  return (
    `<section class="news-sources-wrapper">
      <h2 class="news-sources-header">News sources</h2>
      <div class="news-sources-controls-wrapper">
        <h3 class="news-tab selected" title="publishers">Publishers</h3>
        <h3 class="news-tab" title="countries">Countries</h3>
      </div>
      ${publishersContent}
      ${countriesContent}
    </section>`
  );
}

export const newsSourcesComponent = (sources) => {
  let itemsList = sources.map(item => {
    return newsSourceItem(item.name, item.id);
  });
  let itemsListCountries = countries.map(item => {
    return newsSourceItem(item);
  });
  return newsSources(itemsList, itemsListCountries);
}
