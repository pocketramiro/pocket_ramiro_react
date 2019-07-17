import { setActiveTickets, setLoading, setError } from '../../actions';

export const getActiveTickets = () => {
  return async (dispatch) => {
    const url = `${process.env.REACT_APP_BASEURL}/api/v1/tickets`;

    try {
      dispatch(setLoading(true));

      const response = await fetch(url);

      if (!response.ok) {
        throw Error(response.statusText);
      }

      const activeTickets = await response.json();

      dispatch(setLoading(false));
      dispatch(setActiveTickets(activeTickets));
    } catch (error) {
      dispatch(setError(error.message))
    }
  }
}