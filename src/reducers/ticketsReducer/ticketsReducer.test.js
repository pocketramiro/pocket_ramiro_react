import { ticketsReducer } from './';
import { setActiveTickets, addTicket } from '../../actions';

describe('ticketsReducer', () => {
  it('should return default state', () => {
    const expected = [];
    const result = ticketsReducer(undefined, []);

    expect(result).toEqual(expected);
  });

  it('should is load all the tickets into state when the case is SET_ACTIVE_TICKETS', () => {
    const expected = ['ticket1', 'ticket2'];
    const action = setActiveTickets(expected);
    const result = ticketsReducer([], action);

    expect(result).toEqual(expected);
  });

  it('should add a ticket on the state tree when the case is ADD_TICKET', () => {
    const newTicket = {'name': 'test ticket'};
    const currentState = ['ticket1', 'ticket2'];
    const expected = [...currentState, newTicket];
    const action = addTicket(newTicket);
    const result = ticketsReducer(currentState, action);

    expect(result).toEqual(expected);
  });
});