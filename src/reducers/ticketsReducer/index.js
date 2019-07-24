export const ticketsReducer = (state = [], action) => {
  switch (action.type) {
  case 'SET_TICKETS':
    return action.tickets;
  case 'ADD_TICKET':
    return [...state.data, {...action.tickets}];
  default:
    return state;
  }
};