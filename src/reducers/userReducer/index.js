export const userReducer = (state = 0, action) => {
  switch (action.type) {
  case 'SET_USER':
    return action.user_id;
  case 'CLEAR_USER':
    return 0;
  default:
    return state;
  }
};