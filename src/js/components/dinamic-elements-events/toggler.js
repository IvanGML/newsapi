import { removeClassesFrom, getElement } from '../../stuff/helpers';

export const toggleTabs = () => {
  const publishers = getElement('#publishers-info');
  const countries = getElement('#countries-info');
  const tabs = [...getElement('.news-tab')];
  const switchContent = () => {
    countries.classList.toggle('not-display');
    publishers.classList.toggle('not-display');
  }

  tabs.forEach(elem => {
    elem.addEventListener("click", () => {
      removeClassesFrom(tabs, 'selected');
      switchContent();
      elem.classList.add('selected');
    });
  });
};

