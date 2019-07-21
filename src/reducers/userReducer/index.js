const DEFAULT_STATE = {
  date: {},
  loading: false,
  error: null
}

export const userReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case 'SET_USER':
    return action.user_id;
  case 'CLEAR_USER':
    return {};
  default:
    return state;
  }
};