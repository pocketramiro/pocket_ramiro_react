import { getTickets } from '../getTickets';
import * as actions from '../../actions';

describe('getTickets', () => {
  let url, mockDispatch, thunk, mockTickets;

  beforeEach(() => {
    url = `${process.env.REACT_APP_BASEURL}/api/v1/tickets`;
    mockDispatch = jest.fn();
    thunk = getTickets();
    mockTickets = ['ticket1', 'ticket2'];

    window.fetch = jest.fn().mockImplementation(()=> {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockTickets)
      });
    });
  });

  it('should dispatch setLoading(true)', async () => {
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(true));
  });

  it('should call fetch with the correct params', async () => {
    await thunk(mockDispatch);

    expect(window.fetch).toHaveBeenCalledWith(url);
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

  it('should dispatch setTickets with the correct params', async () => {
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.setTickets(mockTickets));
  });
});