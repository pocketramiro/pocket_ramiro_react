import React from 'react';
import { shallow } from 'enzyme'
import TicketDashboard from './index';

describe('TicketDashboard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TicketDashboard/>)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})