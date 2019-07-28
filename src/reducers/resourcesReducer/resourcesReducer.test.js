import { resourcesReducer } from '.';
import { addResource, setResources } from '../../actions';

describe('resourceReducer', () => {
  it('should return default state', () => {
    const expected = {};
    const result = resourcesReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  describe('setResources case', () => {
    xit('should set resources in state', () => {
      const expected = ['resource 1', 'resource 2'];
      const initialState = [];
      const action = setResources(expected);
      const result = resourcesReducer(initialState, action);

      expect(result).toEqual(expected);
    });
  });

  describe('addResource case', () => {
    xit('should add a resource to the existing resources in state', () => {
      const newResource = 'resource 3';
      const initialState = ['resource 1', 'resource 2'];
      const expected = [...initialState, newResource];
      const action = addResource(newResource);
      const result = resourcesReducer(initialState, action);

      expect(result).toEqual(expected);
    });
  });
});