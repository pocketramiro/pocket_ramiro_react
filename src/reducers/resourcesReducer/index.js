/* eslint-disable no-case-declarations */
export const resourcesReducer = (state = {}, action) => {
  switch (action.type) {
  case 'ADD_RESOURCE':
    const newState = state;
    const newResource = {
      id: action.resource_type_id, 
      type: 'resources', 
      attributes: action.resources
    };
    newState.data = state.data && [...state.data, newResource];
    return newState;
  case 'SET_RESOURCES':
    return action.resources;
  case 'UPDATE_RESOURCE':
    return state.map(resource => {
      return action.resource.id === resource.id ? action.resource : resource;
    });
  case 'DELETE_RESOURCE':
    return state.filter(resource => resource.id !== action.id);
  case 'CLEAR_RESOURCES':
    return [];
  default:
    return state;
  }
};