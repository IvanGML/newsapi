const removeComas = list => list.toString().split(',').join('');

const formatTextForRequest = text => text.split(' ').join('-');

export {
  removeComas,
  formatTextForRequest
}