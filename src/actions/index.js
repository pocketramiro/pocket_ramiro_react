export const addTicket = (ticket) => ({
  type: 'ADD_TICKET',
  ticket
});

export const addResource = (resource) => ({
  type: 'ADD_RESOURCE',
  resource
});

export const setSession = (session) => ({
  type: 'SET_SESSION',
  session
});

export const clearSession = () => ({
  type: 'CLEAR_SESSION'
});

export const setUser = (user_id) => ({
  type: 'SET_USER',
  user_id
});

export const clearUser = () => ({
  type: 'CLEAR_USER'
});

export const clearTickets = () => ({
  type: 'CLEAR_TICKETS'
});

export const clearResources = () => ({
  type: 'CLEAR_RESOURCES'
});

export const clearParts = () => ({
  type: 'CLEAR_PARTS'
});

export const setLoading = (bool) => ({
  type: 'SET_LOADING',
  isLoading: bool
});

export const setError = (error) => ({
  type: 'SET_ERROR',
  error
});

export const addResourceType = (resourceType) => ({
  type: 'ADD_RESOURCE_TYPE',
  resourceType
});

export const addPart = (partId) => ({
  type: 'ADD_PART',
  partId
});

export const setResourceTypes = (resourceTypes) => ({
  type: 'SET_RESOURCES_TYPES',
  resourceTypes
});

export const setResources = (resources) => ({
  type: 'SET_RESOURCES',
  resources
});

export const setTickets = (tickets) => ({
  type: 'SET_TICKETS',
  tickets
});

export const setParts = (parts) => ({
  type: 'SET_RESOURCE_PARTS',
  parts 
});
