 import { spinner, result } from './constants';

const removeComas = list => list.toString().split(',').join('');

const formatTextForRequest = text => text.split(' ').join('-');

const showProloader = () => {
  window.scrollTo(0, 0);
  spinner.style.opacity = 1;
  result.style.opacity = 0;
  setTimeout(()=>{
    spinner.style.opacity = 0;
    result.style.opacity = 1;
  }, 1000)
}

const formatDate = notFormatedDate => {
  const date = new Date(notFormatedDate);
  const formatter = new Intl.DateTimeFormat("ru");
  return formatter.format(date);
}

export {
  removeComas,
  formatTextForRequest,
  showProloader,
  formatDate
}