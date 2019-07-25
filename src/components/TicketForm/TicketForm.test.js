import React from 'react';
import { shallow } from 'enzyme';
import { TicketForm } from './';

describe('TicketForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TicketForm/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});