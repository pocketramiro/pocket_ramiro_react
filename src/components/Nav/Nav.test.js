import React from 'react';
import { shallow } from 'enzyme';
import Nav from './';

describe('Nav', () => {
  let wrapper
  const mock_HandleSelected = jest.fn()
  beforeEach(() => {
    wrapper = shallow(<Nav
      handleSelected={mock_HandleSelected}
    />)
  });


  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should render a Nav component if isSelected is true', () => {
    const isSelected = {isSelected: {isSelected: true } }
    wrapper.setState({isSelected})
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  });

  it('should have a default state', () => {
    const defaultState = {
      isSelected: false,
      title: ''
    }
    expect(wrapper.state()).toEqual(defaultState)
  });

  it('should change isSelected in state to true when clicked', () => {
    wrapper.find('input').simulate('change', { target: { checked: true}})
    expect(wrapper.state('isSelected')).toBe(true)  
  });

  it('should isSelected in state to false when clicked', () => {
    wrapper.find('input').simulate('change', { target: { checked: true}})
    expect(wrapper.state('isSelected')).toBe(true) 
    wrapper.find('input').simulate('change', { target: { checked: false}})
    expect(wrapper.state('isSelected')).toBe(false) 
  });
  
});