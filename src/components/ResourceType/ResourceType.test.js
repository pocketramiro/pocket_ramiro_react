import React from 'react';
import { shallow } from 'enzyme';
import ResourceType  from './';  

describe('ResourceType', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ResourceType/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    const defaultState = {
      category: '',
      company: '',
      contact_number: 0,
      contact_name: ''
    };
    expect(wrapper.state()).toEqual(defaultState);
  });

  it('should change category in state when handle is invoked', () => {
    wrapper.find('input').at(0).simulate('change', { target: { name: 'category', value: 'cool'}});
    expect(wrapper.state('category')).toBe('cool');
  });

  it('should change company in state when handle is invoked', () => {
    wrapper.find('input').at(1).simulate('change', { target: { name: 'company', value: 'Be Cool'}});
    expect(wrapper.state('company')).toBe('Be Cool');
  });
 
  it('should change contact_name in state when handle is invoked', () => {
    wrapper.find('input').at(2).simulate('change', { target: { name: 'contact_name', value: 'Michael'}});
    expect(wrapper.state('contact_name')).toBe('Michael');
  });

  it('should change contact_number in state when handle is invoked', () => {
    wrapper.find('input').at(3).simulate('change', { target: { name: 'contact_number', value: 3034567654}});
    expect(wrapper.state('contact_number')).toBe(3034567654);
  });

  it('should setState to empty string when handleSubmit is called', () => {
    wrapper.setState({
      category: 'tickets',
      contact_name: 'Mike',
      contact_number: 5469875934,
      company: 'Be Cool' });
    wrapper.update();
    wrapper.instance().handleSubmit({ preventDefault: () => {} });

    const defaultState = {
      category: '',
      company: '',
      contact_number: 0,
      contact_name: ''
    };
    wrapper.update();
    expect(wrapper.state()).toEqual(defaultState);
  });
});