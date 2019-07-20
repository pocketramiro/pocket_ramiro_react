import { addResource, setLoading, setError } from '../../actions';


export const postResource = (resource) => {
  return async (dispatch) => {
    const url = `${process.env.REACT_APP_BASEURL}/api/v1/resources`;
    const options = {
      method: "POST",
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(resource)
    };

    try {
      dispatch(setLoading(true));

      const response = await fetch(url, options);

      if (!response.ok) {
        throw Error(response.statusText);
      }

      resource = await response.json();

      dispatch(setLoading(false));
      dispatch(addResource(resource));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};