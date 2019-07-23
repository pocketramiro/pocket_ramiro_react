import { setUser, setLoading, setError } from '../../actions';

export const postUser = (user) => {
  return async (dispatch) => {
    const url = `${process.env.REACT_APP_BASEURL}/api/v1/users`;
    const options = {
      method: "POST",
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(user)
    };

    try {
      dispatch(setLoading(true));

      const response = await fetch(url, options);

      if (!response.ok) {
        throw Error(response.statusText);
      }

      const message = await response.json();
      
      dispatch(setLoading(false));
      dispatch(setUser(message));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};