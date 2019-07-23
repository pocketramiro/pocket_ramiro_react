import { clearSession, setLoading, setError } from '../../actions';
import { clearState } from '../../Utility/localStorage';

export const deleteSession = () => {
  return async (dispatch) => {
    const url = `${process.env.REACT_APP_BASEURL}/api/v1/sessions`;
    const options = {
      method: "POST"
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
      dispatch(clearState());
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};