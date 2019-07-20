import { resourceTypesReducer } from './';
import { setResourceTypes } from '../../actions';
import * as MD from 'react-router-dom';

describe('resourceTypesReducer', () => {
  it('should return default state', () => {
    const expected = [];
    const result = resourceTypesReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should put all resouce types into state', () => {
    const expected = MD.mockPartsResource;
    const action = setResourceTypes(expected);
    const result = resourceTypesReducer([], action);

    expect(result).toEqual(expected);
  });
}); 