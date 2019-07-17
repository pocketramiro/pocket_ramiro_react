import { setParts, setLoading, setError} from '../../actions';

export const getParts = (partsId) => {
  return async (dispatch) => {
    const base = 'http://fathomless-shore-89603.herokuapp.com'
    const url = `${base}/api/v1/${partsId}/parts`

    try {
      const response = await fetch(url);

      if(!response.ok) {
        throw Error(response.statusText)
      }

      const part = await response.json()
      dispatch(setLoading(false))
      dispatch(setParts(part))
    } catch(error) {
      dispatch(setError(error.message))
    }
  }
}