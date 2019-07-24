import { 
  clearSession,
  setLoading, 
  setError, 
  clearTickets, 
  clearResources,
  clearParts} from '../../actions';

export const deleteSession = (id) => {
  return async (dispatch) => {
    const url = `${process.env.REACT_APP_BASEURL}/api/v1/sessions/${id}`;
    const options = {
      method: "DELETE"
    };

    try {
      dispatch(setLoading(true));

      const response = await fetch(url, options);

      if (!response.ok) {
        dispatch(setError(response.statusText));
      }

      await response.json();
      dispatch(setLoading(false));
      dispatch(clearSession());
      dispatch(clearTickets());
      dispatch(clearResources());
      dispatch(clearParts());
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};