export const setActiveTickets = (tickets) => ({
  type: 'SET_ACTIVE_TICKETS',
  tickets
});

export const addTicket = (ticket) => ({
  type: 'ADD_TICKET',
  ticket
});

export const addResource = (resource) => ({
  type: 'ADD_RESOURCE',
  resource
});

export const setAllResources = (resources) => ({
  type: 'SET_ALL_RESOURCES',
  resources
});

export const setLoading = (bool) => ({
  type: 'SET_LOADING',
  isLoading: bool
});

export const setError = (error) => ({
  type: 'SET_ERROR',
  error
});