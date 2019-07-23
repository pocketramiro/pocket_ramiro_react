import { userReducer } from '.';
import { setMessage, clearUser } from '../../actions';

describe('userReducer', () => {
  it('should return default state', () => {
    const expected = {};
    const result = userReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  describe('setMessage case', () => {
    it('should set the user in state', () => {
      const expected = 2;
      const action = setMessage(expected);
      const result = userReducer(0, action);

      expect(result).toEqual(expected);
    });
  });

  describe('clearUser case', () => {
    it('should clear the user from state', () => {
      const currentState = 3;
      const expected = {};
      const action = clearUser();
      const result = userReducer(currentState, action);

      expect(result).toEqual(expected);
    });
  });
});