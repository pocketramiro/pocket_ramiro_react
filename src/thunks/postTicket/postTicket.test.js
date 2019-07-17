import { postTicket } from '.';
import * as actions from '../../actions';

describe('postTicket', () => {
  let mockTicket, url, options, thunk, mockDispatch;

  beforeEach(() => {
    mockTicket = {'name': 'test ticket'};
    url = `${process.env.REACT_APP_BASEURL}/api/v1/tickets`;
    options = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(mockTicket)
    }

    thunk = postTicket(mockTicket);
    mockDispatch = jest.fn();
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockTicket)
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
    mockDispatch.mockImplementation(() => mockTicket);

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.addTicket(mockTicket));
  });
});