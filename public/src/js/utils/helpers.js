const removeComas = list => list.toString().split(',').join('');

const formatTextForRequest = text => text.split(' ').join('-');

const showProloader = () => {
  window.scrollTo(0, 0);
  const spinner = document.getElementById('spinner-wrapper');
  const result = document.getElementById('result-list');
  spinner.style.opacity = 1;
  result.style.opacity = 0;
  setInterval(()=>{
    spinner.style.opacity = 0;
    result.style.opacity = 1;
  }, 1000)
}

export {
  removeComas,
  formatTextForRequest,
  showProloader
}