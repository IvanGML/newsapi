const reducer = (state, action) => {
  action = action || '';
  if (action.type === 'GET_SOURCES') {
    return {
      ...state,
      sources: action.payload,
    };
  } else if (action.type === 'GET_NEWS') {
    return {
      ...state,
      news: action.payload,
    };
  } else {
    return state;
  };
}

export default reducer;
