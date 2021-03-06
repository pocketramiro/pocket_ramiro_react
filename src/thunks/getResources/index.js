import { setResources, setLoading, setError } from '../../actions';

export const getResources = () => {
  return async (dispatch) => {
    const url = `${process.env.REACT_APP_BASEURL}/api/v1/resources`;
    
    try {
      dispatch(setLoading(true));

      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }

      const resources = await response.json();

      dispatch(setLoading(false));
      dispatch(setResources(resources));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};