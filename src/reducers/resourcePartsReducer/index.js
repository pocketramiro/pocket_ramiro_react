
export const resourcePartsReducer = (state = [], action) => {
  switch (action.type) {
  case 'SET_RESOURCE_PARTS':
    return action.parts;
  case 'ADD_PART':
    return [...state, action.partId];
  default:
    return state;
  }
};