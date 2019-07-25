import { ticketsReducer } from './';
import { setTickets, addTicket } from '../../actions';

describe('ticketsReducer', () => {
  it('should return default state', () => {
    const expected = {};
    const result = ticketsReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should is load all the tickets into state when the case is SET_TICKETS', () => {
    const expected = {data: ['ticket1', 'ticket2'], included: []};
    const action = setTickets(expected);
    const result = ticketsReducer({}, action);

    expect(result).toEqual(expected);
  });

  it('should add a ticket on the state tree when the case is ADD_TICKET', () => {
    const newTicket = {id: 3, 'name': 'ticket3'};
    const currentState = {data: []};
    const expected = {attributes: newTicket, type: 'ticket', id: newTicket.id};
    const action = addTicket(newTicket);
    const result = ticketsReducer(currentState, action);
    expect(result.data[0]).toEqual(expected);
  });
});