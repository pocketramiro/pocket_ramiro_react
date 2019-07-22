import {
  setParts,
  setTickets,
  setResources,
  setLoading,
  setError
} from '../../actions';
import startCase from 'lodash/startCase';

const ACTION_MAP = {
  setParts,
  setTickets,
  setResources
}

export const fetchCollection = (pathname) => {
  return async (dispatch) => {
    const url = `${process.env.REACT_APP_BASEURL}/api/v1${pathname}`;
    const dataKey = url.split('/').slice(-1)[0];
    const actionName = `set${startCase(dataKey)}`;

    try {
      dispatch(setLoading(true));
      const response = await fetch(url);

      if (!response.ok) {
        dispatch(setError(response.statusText));
      }

      const data = await response.json();
      
      dispatch(setLoading(false));
      dispatch(ACTION_MAP[actionName] && ACTION_MAP[actionName](data));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};