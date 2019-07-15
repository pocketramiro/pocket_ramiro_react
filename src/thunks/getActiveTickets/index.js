import { setActiveTickets, setLoading, setError } from '../../actions';

export const getActiveTickets = () => {
  return async (dispatch) => {
    const base = "https://fathomless-shore-89603.herokuapp.com";
    const url = `${base}/api/v1/tickets`;

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