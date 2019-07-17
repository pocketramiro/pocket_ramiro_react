import { resourcePartsReducer } from './';
import { setResourceParts } from '../../actions';

describe('resoucePartsReducer', () => {
  it('should return a default state', () => {
    const expected = [];

    const result = resourcePartsReducer(undefined, [])
    expect(result).toEqual(expected)
  });
});