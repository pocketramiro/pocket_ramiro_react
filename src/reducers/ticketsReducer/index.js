export const ticketsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ACTIVE_TICKETS':
      return action.tickets;
    case 'ADD_TICKET':
      return [...state, action.ticket]
    default:
      return state;
  }
}