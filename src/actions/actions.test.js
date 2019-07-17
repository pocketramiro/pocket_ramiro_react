import * as actions from './';

describe('actions', () => {

  describe('setResources', () => {
    it('should return a type of SET_RESOURCES with a resources array', () => {
      const resources = [
        {
          name:'Test Resource',
          id: 1
        }
      ];
      
      const expected = {type: 'SET_RESOURCES', resources};

      const result = actions.setResources(resources);

      expect(result).toEqual(expected);
    });
  });

  describe('setActiveTickets', () => {
    it('should return a type of SET_ACTIVE_TICKETS with a tickets array', () => {
      const tickets = [
        {
          name:'Test Ticket',
          id: 1
        }
      ];
      
      const expected = {type: 'SET_ACTIVE_TICKETS', tickets};

      const result = actions.setActiveTickets(tickets);

      expect(result).toEqual(expected);
    });
  });

  describe('addTicket', () => {
    it('should return a type of ADD_TICKET with a ticket object', () => {
      const ticket = {name:'Test Ticket', id: 1};
      
      const expected = {type: 'ADD_TICKET', ticket};

      const result = actions.addTicket(ticket);

      expect(result).toEqual(expected);
    });
  });

  describe('addResource', () => {
    it('should return a type of ADD_RESOURCE with a resource object', () => {
      const resource = {name:'Test Resource', id: 1};
      
      const expected = {type: 'ADD_RESOURCE', resource};

      const result = actions.addResource(resource);

      expect(result).toEqual(expected);
    });
  });

  describe('setUser', () => {
    it('should return a type of SET_USER with a user object', () => {
      const user = {name:'Carrie', id: 1};
      
      const expected = {type: 'SET_USER', user};

      const result = actions.setUser(user);

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
      }

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
});