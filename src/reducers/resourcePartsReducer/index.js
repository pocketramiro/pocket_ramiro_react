
export const resourcePartsReducer = (state = [], action) => {
  switch(action.type){
    case 'SET_RESOURCE_PARTS':
      return [...state, action.parts]
    default:
      return state;
  }
}