export const resourceTypesReducer = (state = [], action) => {
  switch (action.type) {
  case 'SET_RESOURCES_TYPES':
    return action.resourceTypes;
  case 'ADD_RESOURCE_TYPE':
    return [...state, action.resourceType]
  default:
    return state;
  }
};