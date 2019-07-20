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
    thunk = postPart(mockId, mockPart);

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

  
}); 