import { combineReducers } from 'redux';
import { resourcesReducer } from './resourcesReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { errorReducer } from './errorReducer';

export const rootReducer = combineReducers({
  resources: resourcesReducer,
  isLoading: isLoadingReducer,
  error: errorReducer
});