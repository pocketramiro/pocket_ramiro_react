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