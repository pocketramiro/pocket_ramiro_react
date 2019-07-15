import { ticketsReducer } from './';
import { setActiveTickets } from '../../actions';

describe('setActiveTickets', () => {
  it('should return default state', () => {
    const expected = [];
    const result = ticketsReducer(undefined, []);

    expect(result).toEqual(expected);
  });

  it('should change is loading on the state tree', () => {
    const expected = ['ticket1', 'ticket2'];
    const action = setActiveTickets(expected);
    const result = ticketsReducer([], action);

    expect(result).toEqual(expected);
  });
});