import React from 'react';
import { shallow } from 'enzyme';
import Card  from './';
import * as MD from '../../Utility/MockData';

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
 
    wrapper = shallow(<Card
      item={ MD.mockTicket}
    />);
  });

  it('should match the snapshot', () => {   
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if a resource is passed as props', () => {
    wrapper.setProps({item: MD.mockResources[0]});
    expect(wrapper).toMatchSnapshot();
  });

  it('should have render a link if the card has a resource_type_id prop', () => {
    wrapper.setProps({item: MD.mockResources[0]});
    expect(wrapper.exists('Link')).toBe(true);
  }); 

  it('should not have notes if the prop is mock resources', () => {
    wrapper.setProps({item: MD.mockResources[0]});
    expect(wrapper.exists('.card-notes')).toBe(false);
  });
  
});
 