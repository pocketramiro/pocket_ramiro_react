export const pathReducer = (state = '', action) => {
  switch (action.type) {
  case 'SET_PATH':
    return action.path;
  default:
    return state;
  }
};