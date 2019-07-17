export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.tickets;
    case 'CLEAR_USER':
      return {};
    default:
      return state;
  }
}