import { resourcePartsReducer } from './';
import { setResourceParts } from '../../actions';
import * as MD from '../../Utility/MockData';

describe('resoucePartsReducer', () => {

  it('should return a default state', () => {
    const expected = [];

    const result = resourcePartsReducer(undefined, [])
    expect(result).toEqual(expected)
  });

  it('should put all resouce parts into state when the case SET_RESOURCE_PARTS', () => {
    const expected = MD.mockPartsResouce
    const action = setResourceParts(expected);
    const result = resourcePartsReducer([], action);

    expect(result).toEqual(expected);
  });

});