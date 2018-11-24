const getElement = selector => {
  const elementsList = document.querySelectorAll(selector);
  return elementsList.length > 1 ? elementsList : elementsList[0];
};

const removeComas = list => list.toString().split(',').join('');

const formatTextForRequest = text => text.split(' ').join('-');

const showProloader = () => {
  let spinner = getElement('#spinner-wrapper');
  let result = getElement('#result-list');
  window.scrollTo(0, 0);
  spinner.style.opacity = 1;
  result.style.opacity = 0;
  setTimeout(()=>{
    spinner.style.opacity = 0;
    result.style.opacity = 1;
  }, 1000)
}

const removeClassesFrom = (elem, className) => elem.forEach(item => item.classList.remove(className));

const formatDate = notFormatedDate => {
  const date = new Date(notFormatedDate);
  const formatter = new Intl.DateTimeFormat("ru");
  return formatter.format(date);
}

export {
  removeComas,
  formatTextForRequest,
  showProloader,
  formatDate,
  removeClassesFrom,
  getElement,
}