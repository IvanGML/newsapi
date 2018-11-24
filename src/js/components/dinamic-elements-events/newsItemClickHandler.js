import { renderArticles } from '../renderArticles';

export const newsItemClickHandler = () => {
  const resultItems = [...document.querySelectorAll('.result-item')];
  resultItems.forEach(item => {
    item.addEventListener('click', function() {
      let sources = this.getAttribute('title');
      if (sources.length > 2 && sources !== 'rt') {
        renderArticles({ sources });
      } else {
        renderArticles({ country: sources });
      }
    })
  })
}