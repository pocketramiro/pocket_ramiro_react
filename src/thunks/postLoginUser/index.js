import { setUser, setLoading, setError } from '../../actions';

export const postLoginUser = (user) => {
  return async (dispatch) => {
    const base = "https://fathomless-shore-89603.herokuapp.com";
    const url = `${base}/api/v1/users`;
    const options = {
      method: "POST",
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(user)
    }

    try {
      dispatch(setLoading(true));

      const response = await fetch(url, options);

      if (!response.ok) {
        throw Error(response.statusText);
      }

      const user = await response.json();

      dispatch(setLoading(false));
      dispatch(setUser(user));
    } catch (error) {
      dispatch(setError(error.message))
    }
  }
}