import { postPart } from '../postPart';
import * as actions from '../../actions';
import * as MD from '../../Utility/MockData';

describe('postPart', () => {
  let url, options, mockDispatch, thunk, mockPart, mockId;

  beforeEach(() => {
    mockId = 1;
    url = `${process.env.REACT_APP_BASEURL}/api/v1/resources/${mockId}/parts`;
    mockPart = MD.mockPart;
    options = {
      method: "POST",
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(mockPart)
    };
    mockDispatch = jest.fn();
    thunk = postPart(mockPart, mockId);

    window.fetch = jest.fn().mockImplementation(()=> {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(MD.mockPostPartResponse)
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

  it('should dispatch addPart with the correct params', async () => {
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.addPart(MD.mockPostPartResponse));
  }); 
}); 