import { setResourceType, setLoading, setError } from '../../actions';

export const getTickets = () => {
  return async (dispatch) => {
    const url = `${process.env.REACT_APP_BASEURL}/api/v1/resource_types`;
    
    try {
      dispatch(setLoading(true));

      const response = await fetch(url);

      if (!response.ok) {
        throw Error(response.statusText);
      }

      const resourceTypes = await response.json();

      dispatch(setLoading(false));
      dispatch(setResourceTypes(resourceTypes));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};