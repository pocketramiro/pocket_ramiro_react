import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { resourcesReducer } from './resourcesReducer';
import { ticketsReducer } from './ticketsReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { errorReducer } from './errorReducer';
import { resourcePartsReducer } from './resourcePartsReducer';
import { pathReducer } from './pathReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  resources: resourcesReducer,
  tickets: ticketsReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
  resourceParts: resourcePartsReducer,
  path: pathReducer
});