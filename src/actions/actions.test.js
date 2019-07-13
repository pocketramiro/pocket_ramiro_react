import * as actions from './';

describe('actions', () => {
  
  describe('setAllResources', () => {
    it('should return a type of setAll with a projects array', () => {
      const resources = [
        {
          name:'Test Resource',
          id: 1
        }
      ];
      
      const expected = {type: 'SET_ALL_RESOURCES', resources};

      const result = actions.setAllResources(resources);

      expect(result).toEqual(expected);
    });
  });

  describe('setLoading', () => {
    it('should return a type of setLoading with a boolean', () => {
      const bool = true;
      const expected = {
        type: 'SET_LOADING',
        isLoading: bool
      }

      const result = actions.setLoading(bool);

      expect(result).toEqual(expected);
    });
  });
});