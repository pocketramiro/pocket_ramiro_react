import { setParts, setLoading, setError} from '../../actions';

export const getParts = (resourceId) => {
  return async (dispatch) => {
    const url = `${process.env.REACT_APP_BASEURL}/api/v1/resources/${resourceId}/parts`;

    try {
      dispatch(setLoading(true));
      const response = await fetch(url);

      if (!response.ok) {
        throw Error(response.statusText);
      }

      const parts = await response.json();
      dispatch(setLoading(false));
      dispatch(setParts(parts));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};