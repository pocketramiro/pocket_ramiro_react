import { resourceTypesReducer } from './';
import { setResourceTypes } from '../../actions';

describe('resourceTypesReducer', () => {
  it('should return default state', () => {
    const expected = [];
    const result = resourceTypesReducer(undefined, {});

    expect(result).toEqual(expected);
  });

}); 