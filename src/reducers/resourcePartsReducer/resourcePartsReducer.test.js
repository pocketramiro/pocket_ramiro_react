import { resourcePartsReducer } from './';
import { setParts } from '../../actions';
import * as MD from '../../Utility/MockData';

describe('resoucePartsReducer', () => {

  it('should return a default state', () => {
    const expected = [];

    const result = resourcePartsReducer(undefined, []);
    expect(result).toEqual(expected);
  });

  it('should put all resouce parts into state', () => {
    const expected = MD.mockPartsResouce;
    const action = setParts(expected);
    const result = resourcePartsReducer([], action);

    expect(result).toEqual(expected);
  });

});