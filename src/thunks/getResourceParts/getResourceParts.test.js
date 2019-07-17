import { getResourceParts } from './';
import * as actions from '../../actions';
import * as MD from '../../Utility/MockData';

describe('getResouceParts', () => {
  let url, mockDispatch, thunk, resourceId, mockParts;

  beforeEach(() => {
    resourceId = 1
    url = `https://fathomless-shore-89603.herokuapp.com/api/v1/${resourceId}/parts`
    mockDispatch = jest.fn();
    thunk = getResourceParts(resourceId);
    mockParts = MD.mockPartsResouce;

    window.fetch = jest.fn().mockImplementation(()=> {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockParts)
      });
    });
  });

  it('should dispatch setLoading(true)', async () => {
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(true));
  });

  it('should return an error if response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        statusText: MD.mockError
      });
    });

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.setError(MD.mockError));
  });

  it('should dispatch setLoading(false)', async () => {
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(false));
  });

});
