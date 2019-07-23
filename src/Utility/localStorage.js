export const loadState = () => {
  return localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}
};

export const saveState = (state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem('reduxState', serializedState);
};

export const clearState = () => {
  localStorage.removeItem('reduxState');
};