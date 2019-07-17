import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { resourcesReducer } from './resourcesReducer';
import { ticketsReducer } from './ticketsReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { errorReducer } from './errorReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  resources: resourcesReducer,
  tickets: ticketsReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});