export const setAllResources = (resources) => ({
  type: 'SET_ALL_RESOURCES',
  resources
})

export const setLoading = (bool) => ({
  type: 'SET_LOADING',
  isLoading: bool
})