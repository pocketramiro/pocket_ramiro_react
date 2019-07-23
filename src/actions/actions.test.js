import * as actions from './';
import * as MD from '../Utility/MockData';

describe('actions', () => {

  describe('setResources', () => {
    it('should return a type of SET_RESOURCES with a resources array', () => {
      const resources = [
        {
          name: 'Test Resource',
          id: 1
        }
      ];
      
      const expected = {type: 'SET_RESOURCES', resources};

      const result = actions.setResources(resources);

      expect(result).toEqual(expected);
    });
  });

  describe('setTickets', () => {
    it('should return a type of SET_TICKETS with a tickets array', () => {
      const tickets = [
        {
          name: 'Test Ticket',
          id: 1
        }
      ];
      
      const expected = {type: 'SET_TICKETS', tickets};

      const result = actions.setTickets(tickets);

      expect(result).toEqual(expected);
    });
  });

  describe('addTicket', () => {
    it('should return a type of ADD_TICKET with a ticket object', () => {
      const ticket = {name: 'Test Ticket', id: 1};
      
      const expected = {type: 'ADD_TICKET', ticket};

      const result = actions.addTicket(ticket);

      expect(result).toEqual(expected);
    });
  });

  describe('addResource', () => {
    it('should return a type of ADD_RESOURCE with a resource object', () => {
      const resource = {name: 'Test Resource', id: 1};
      
      const expected = {type: 'ADD_RESOURCE', resource};

      const result = actions.addResource(resource);

      expect(result).toEqual(expected);
    });
  });

  describe('setMessage', () => {
    it('should return a type of SET_USER with a user object', () => {
      const user_id = 1;
      
      const expected = {type: 'SET_USER', user_id};

      const result = actions.setMessage(user_id);

      expect(result).toEqual(expected);
    });
  });

  describe('clearUser', () => {
    it('should return a type of CLEAR_USER', () => {
      const expected = {type: 'CLEAR_USER'};

      const result = actions.clearUser();

      expect(result).toEqual(expected);
    });
  });

  describe('setLoading', () => {
    it('should return a type of setLoading with a boolean', () => {
      const bool = true;
      const expected = {
        type: 'SET_LOADING',
        isLoading: bool
      };

      const result = actions.setLoading(bool);

      expect(result).toEqual(expected);
    });
  });

  describe('setError', () => {
    it('should return a type of setError with an error message', () => {
      const error = 'Something went wrong';
      const expected = {
        type: 'SET_ERROR',
        error
      };

      const result = actions.setError(error);

      expect(result).toEqual(expected);
    });
  });

  describe('setResourceTypes', () => {
    it('should return a type of SET_RESOURCES_Types with a resources array', () => {
      const resourceTypes = MD.mockResouceTypes;

      const expected = {type: 'SET_RESOURCES_TYPES', resourceTypes};

      const result = actions.setResourceTypes(MD.mockResouceTypes);

      expect(result).toEqual(expected);
    });
  });
}); 