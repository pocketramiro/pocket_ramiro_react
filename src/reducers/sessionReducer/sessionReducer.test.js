import { sessionReducer } from './';
import { setSession, clearSession } from '../../actions';

describe('sessionReducer', () => {
  it('should return default state', () => {
    const expected = {};
    const result = sessionReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should is load the session into state when the case is SET_SESSION', () => {
    const expected = {
      "session": {
          "user_id": 13,
          "name": "Cameron Clarks",
          "role": "admin"
      }
    };
    const action = setSession(expected);
    const result = sessionReducer({}, action);

    expect(result).toEqual(expected);
  });

  it('should clear the session in the state when the case is CLEAR_SESSION', () => {
    const expected = {};
    const currentState = {
      "session": {
          "user_id": 13,
          "name": "Cameron Clarks",
          "role": "admin"
      }
    };
    const action = clearSession();
    const result = sessionReducer(currentState, action);

    expect(result).toEqual(expected);
  });
});