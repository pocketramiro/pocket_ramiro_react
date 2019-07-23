import { clearSession, setLoading, setError } from '../../actions';

export const deleteSession = () => {
  return async (dispatch) => {
    const url = `${process.env.REACT_APP_BASEURL}/api/v1/sessions`;
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
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};