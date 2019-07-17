import { postLoginUser } from '.';
import * as actions from '../../actions';

describe('postLoginUser', () => {
  let url, options, mockDispatch, thunk, mockUser;

  beforeEach(() => {
    url = 'https://fathomless-shore-89603.herokuapp.com/api/v1/users';
    mockUser = {"name": "Jennica", "id": 4};
    options = {
      method: "POST",
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(mockUser)
    }
    mockDispatch = jest.fn();
    thunk = postLoginUser(mockUser);

    window.fetch = jest.fn().mockImplementation(()=> {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockUser)
      });
    });
  });

  it('should dispatch setLoading(true)', async () => {
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(true));
  });

  it('should call fetch with the correct params', async () => {
    await thunk(mockDispatch);

    expect(window.fetch).toHaveBeenCalledWith(url, options);
  });

  it('should return an error if response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        statusText: 'Something went wrong'
      });
    });

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.setError('Something went wrong'));
  });

  it('should dispatch setLoading(false)', async () => {
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(false));
  });

  it('should dispatch setUser with the correct params', async () => {
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.setUser(mockUser));
  });
});