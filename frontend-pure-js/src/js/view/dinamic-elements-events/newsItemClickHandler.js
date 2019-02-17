import { getElement } from '../../stuff/helpers';

export const newsItemClickHandler = (renderArticles, fetchData) => {
  const resultItems = [...getElement('.result-item')];
  console.log(resultItems);
  resultItems.forEach(item => {
    item.addEventListener('click', function() {
      let sources = this.getAttribute('title');
      if (sources.length > 2 && sources !== 'rt') {
        renderArticles({
          fetchData,
          requestData: { sources }
        });
      } else {
        renderArticles({
          fetchData,
          requestData: { country: sources }
        });
      }
    })
  })
}