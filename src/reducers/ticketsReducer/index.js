export const ticketsReducer = (state = {}, action) => {
  switch (action.type) {
  case 'SET_TICKETS':
    return action.tickets;
  case 'ADD_TICKET':
    const newState = state;
    const newTicket = {id: action.ticket.id, type: 'ticket' , attributes: action.ticket};
    newState.data = state.data && [...state.data, newTicket];
    return newState;
  case 'CLEAR_TICKETS':
    return [];
  default:
    return state;
  }
};