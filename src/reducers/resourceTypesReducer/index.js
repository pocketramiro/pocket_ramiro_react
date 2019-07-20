export const resourceTypesReducer = (state = [], action) => {
  switch (action.type) {
  case 'SET_RESOURCES_TYPES':
    return action.resourceTypes;
  default:
    return state;
  }
};