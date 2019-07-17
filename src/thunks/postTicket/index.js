import { addTicket, setLoading, setError } from '../../actions';

export const postTicket = (ticket) => {
  return async (dispatch) => {
    const url = `${process.env.REACT_APP_BASEURL}/api/v1/tickets`;
    const options = {
      method: "POST",
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(ticket)
    }

    try {
      dispatch(setLoading(true));

      const response = await fetch(url, options);

      if (!response.ok) {
        throw Error(response.statusText);
      }
      
      ticket = await response.json();

      dispatch(setLoading(false));
      dispatch(addTicket(ticket));
    } catch (error) {
      dispatch(setError(error.message))
    }
  }
}