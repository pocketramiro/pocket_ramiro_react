import { setSession, setLoading, setError } from '../../actions';

export const postSession = (login_info) => {
  return async (dispatch) => {
    const url = `${process.env.REACT_APP_BASEURL}/api/v1/sessions`;
    const options = {
      method: "POST",
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(login_info)
    };

    try {
      dispatch(setLoading(true));

      const response = await fetch(url, options);

      if (!response.ok) {
        dispatch(setError(response.statusText));
      }

      const session = await response.json();
      dispatch(setLoading(false));
      dispatch(setSession(session));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};