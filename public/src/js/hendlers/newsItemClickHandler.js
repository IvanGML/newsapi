import { fetchArticles } from '../requests/fetchArticles';
import { renderArticles } from '../components/render';

export const newsItemClickHandler = () => {
  const resultItems = [...document.querySelectorAll('.result-item')];
  resultItems.forEach(item => {
    item.addEventListener('click', function() {
      let sources = this.getAttribute('title');
      if (sources.length > 2 && sources !== 'rt') {
        fetchArticles({ sources, renderArticles});
      } else {
        console.log(sources);
        fetchArticles({ country: sources, renderArticles});
      }
    })
  })
}