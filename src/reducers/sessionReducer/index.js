export const sessionReducer = (state = {}, action) => {
  switch (action.type) {
  case 'SET_SESSION':
    return action.session;
  case 'CLEAR_SESSION':
    return {};
  default:
    return state;
  }
};