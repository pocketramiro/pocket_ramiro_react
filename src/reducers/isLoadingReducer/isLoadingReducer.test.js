import { isLoadingReducer } from './';
import { setLoading } from '../../actions';

describe('isLoadingReducer', () => {
  it('should return default state', () => {
    const expected = false;
    const result = isLoadingReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should change is loading on the state tree', () => {
    const expected = true;
    const action = setLoading(true);
    const result = isLoadingReducer(false, action);

    expect(result).toEqual(expected);
  });
});