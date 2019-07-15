export const ticketsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ACTIVE_TICKETS':
      return action.tickets;
    default:
      return state;
  }
}