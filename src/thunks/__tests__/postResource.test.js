import { postResource } from '../postResource';
import * as actions from '../../actions';

describe('postResource', () => {
  let mockResource, url, options, thunk, mockDispatch;

  beforeEach(() => {
    mockResource = {'name': 'test resource'};
    url = `${process.env.REACT_APP_BASEURL}/api/v1/resources`;
    options = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(mockResource)
    };

    thunk = postResource(mockResource);
    mockDispatch = jest.fn();
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResource)
      });
    });
  });
      
  it('should call dispatch with setLoading(true)', async () => {
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(true));
  });

  it('should call fetch with the correct params', async () => {
    await thunk(mockDispatch);

    expect(window.fetch).toHaveBeenCalledWith(url, options);
  });

  it('should dispatch error if response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        statusText: 'Something went wrong'
      });
    });

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.setError('Something went wrong'));
  });

  it('should dispatch setLoading(false) if response is ok', async () => {
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(false));
  });

  it('should dispatch Palette with the correct params', async () => {
    mockDispatch.mockImplementation(() => mockResource);

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.addResource(mockResource));
  });
});