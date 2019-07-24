import { addTicket, setLoading, setError } from '../../actions';

export const postTicket = (ticket, id) => {
  return async (dispatch) => {
    const url = `${process.env.REACT_APP_BASEURL}/api/v1/resources/${id}/tickets`;
    const options = {
      method: "POST",
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(ticket)
    };

    try {
      dispatch(setLoading(true));

      const response = await fetch(url, options);
 
      if (!response.ok) {
        throw Error(response.statusText);
      }
      
      const  result = await response.json();

      dispatch(setLoading(false));
      dispatch(addTicket(result));
      return result;
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};