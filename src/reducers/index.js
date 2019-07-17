import { combineReducers } from 'redux';
import { resourcesReducer } from './resourcesReducer';
import { ticketsReducer } from './ticketsReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { errorReducer } from './errorReducer';
import { resourcePartsReducer } from './resourcePartsReducer';

export const rootReducer = combineReducers({
  resources: resourcesReducer,
  tickets: ticketsReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
  resourceParts: resourcePartsReducer
});