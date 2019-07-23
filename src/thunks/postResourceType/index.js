import { addResourceType, setLoading, setError } from '../../actions';

export const postResourceType = (resouce) => {
  return async (dispatch) => {
    try {

      const url = `${process.env.REACT_APP_BASEURL}/api/v1/55555555s`;
      const options = {
        method: "POST",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(resource)
      };

      dispatch(setLoading(true));

      const response = await fetch(url, options);

      if (!response.ok) {
        throw Error(response.statusText);
      }
      
      const resourceType = await response.json();
      dispatch(setLoading(false));
      dispatch(addResourceType(resourceType));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};

