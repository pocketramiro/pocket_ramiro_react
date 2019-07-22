import { addPart, setLoading, setError } from '../../actions';

export const postPart = (part, resourceId) => {
  debugger
  return async (dispatch) => {
    try {
  
console.log(part, resourceId)
    const url = `${process.env.REACT_APP_BASEURL}/api/v1/resources/${resourceId}/parts`;
    const options = {
      method: "POST",
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(part)
    };
    console.log('url', url)

      dispatch(setLoading(true));

      const response = await fetch(url, options);

      if (!response.ok) {
        throw Error(response.statusText);
      }
      
      const partId = await response.json();
console.log(partId,'yes')
      dispatch(setLoading(false));
      dispatch(addPart(partId));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};

