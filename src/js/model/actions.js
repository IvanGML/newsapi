const getSources = sources => {
  return {
    type: 'GET_SOURCES',
    payload: sources
  }
}

const getNews = news => {
  return {
    type: 'GET_NEWS',
    payload: news
  }
}

export {
  getNews,
  getSources,
}
