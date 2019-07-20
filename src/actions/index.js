export const setPath = (path) => ({
  type: 'SET_PATH',
  path
});

export const setTickets = (tickets) => ({
  type: 'SET_TICKETS',
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

export const setUser = (user_id) => ({
  type: 'SET_USER',
  user_id
});

export const clearUser = () => ({
  type: 'CLEAR_USER'
});

export const setResources = (resources) => ({
  type: 'SET_RESOURCES',
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

export const setResourceParts = (parts) => ({
  type: 'SET_RESOURCE_PARTS',
  parts 
});

export const addPart = (partId) => ({
  type: 'ADD_PART',
  partId
});

export const setResourceTypes = (resourceTypes) => ({
  type: 'SET_RESOURCES_TYPES',
  resourceTypes
});