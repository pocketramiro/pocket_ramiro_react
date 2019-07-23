import { resourceTypesReducer } from './';
import { addResourceType, setResourceTypes } from '../../actions';
import * as MD from '../../Utility/MockData';

describe('resourceTypesReducer', () => {
  it('should return default state', () => {
    const expected = [];
    const result = resourceTypesReducer(undefined, {});
 
    expect(result).toEqual(expected);
  });

  it('should put all resource types into state', () => {
    const expected = MD.mockPartsResource;
    const action = setResourceTypes(expected);
    const result = resourceTypesReducer([], action);

    expect(result).toEqual(expected);
  });

  it('should add a resource on the state tree when the case is ADD_RESOURCE_TYPE', () => {

    const currentState = [];
    const expected = [...currentState, MD.mockResourceTypes[0]];
    const action = addResourceType(MD.mockResourceTypes[0]);
    const result = resourceTypesReducer(currentState, action);

    expect(result).toEqual(expected);
  });
}); 