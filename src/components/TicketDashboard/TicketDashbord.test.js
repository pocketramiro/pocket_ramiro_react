import React from 'react';
import { shallow } from 'enzyme'
import { TicketDashboard, mapDispatchToProps } from './';

describe('TicketDashboard', () => {
  let wrapper;
  let mockLocation;

  beforeEach(() => {
    mockLocation = {pathname: 'tickets'}
    wrapper = shallow(<TicketDashboard location={mockLocation}/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should match the snapshot if location is assets', () => {
    mockLocation.pathname = 'assets';
    wrapper = shallow(<TicketDashboard location={mockLocation}/>);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('MapDispatchToProps', () => {
  let mockDispatch, mappedProps;

  beforeEach(() => {
    mockDispatch = jest.fn()
    mappedProps = mapDispatchToProps(mockDispatch)
  });

});