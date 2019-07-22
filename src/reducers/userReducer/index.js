export const userReducer = (state = {}, action) => {
  switch (action.type) {
  case 'SET_USER':
    return action.user_id;
  case 'CLEAR_USER':
    return {};
  default:
    return state;
  }
};