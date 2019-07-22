import { postSession } from '../postSession';
import * as actions from '../../actions';

describe('postSession', () => {
  let url, options, mockDispatch, thunk, mockLoginInfo, mockSession;

  beforeEach(() => {
    url = `${process.env.REACT_APP_BASEURL}/api/v1/sessions`;
    mockLoginInfo = {"email": "jenn@gmail.com", "password": "password"};
    options = {
      method: "POST",
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(mockLoginInfo)
    };
    mockSession = {
    "session": {
        "user_id": 13,
        "name": "Jennica",
        "role": "admin"
      }
    }
    mockDispatch = jest.fn();
    thunk = postSession(mockLoginInfo);

    window.fetch = jest.fn().mockImplementation(()=> {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockSession)
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

  it('should dispatch setSession with the correct params', async () => {
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.setSession(mockSession));
  });
});