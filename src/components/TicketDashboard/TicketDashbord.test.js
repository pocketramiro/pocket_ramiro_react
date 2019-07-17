import React from 'react';
import { shallow } from 'enzyme'
import { TicketDashboard, mapDispatchToProps } from './';

describe('TicketDashboard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TicketDashboard getActiveTickets={jest.fn()}/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
});

describe('MapDispatchToProps', () => {
  let mockDispatch, mappedProps;

  beforeEach(() => {
    mockDispatch = jest.fn()
    mappedProps = mapDispatchToProps(mockDispatch)
  });

});