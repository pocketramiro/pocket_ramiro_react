import { setResourceParts, setLoading, setError} from '../../actions';

export const getResourceParts = (resourceId) => {
  return async (dispatch) => {
    const base = 'http://fathomless-shore-89603.herokuapp.com'
    const url = `${base}/api/v1/${resourceId}/parts`

    try {
      dispatch(setLoading(true))
      const response = await fetch(url);

      if(!response.ok) {
        throw Error(response.statusText)
      }

      const parts = await response.json()
      dispatch(setLoading(false))
      dispatch(setResourceParts(parts))
    } catch(error) {
      dispatch(setError(error.message))
    }
  }
}