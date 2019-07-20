import { resourceTypesReducer } from './';
import { setResourceTypes } from '../../actions';
import * as MD from 'react-router-dom';

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

  // it('should add a ticket on the state tree when the case is ADD_TICKET', () => {
  //   const newTicket = {'name': 'test ticket'};
  //   const currentState = ['ticket1', 'ticket2'];
  //   const expected = [...currentState, newTicket];
  //   const action = addTicket(newTicket);
  //   const result = ticketsReducer(currentState, action);

  //   expect(result).toEqual(expected);
  // });
}); 