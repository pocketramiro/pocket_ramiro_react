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
    
    wrapper.setProps({created_at: MD.mockResources[0].created_at})
    expect(wrapper).toMatchSnapshot()
  });

});
 