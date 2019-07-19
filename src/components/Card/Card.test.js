import React from 'react';
import { shallow } from 'enzyme'
import Card from './';
import * as MD from '../../Utility/MockData'

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
 
    wrapper = shallow(<Card
    ticket={ MD.mockTicket}
    />)
  });

  it('should match the snapshot', () => {   
    expect(wrapper).toMatchSnapshot()
  });

  it('should match the snapshot if a resouce is passed as props', () => {
    wrapper.setProps({ticket: MD.mockResources[0]})
    expect(wrapper).toMatchSnapshot();
  });

});
 