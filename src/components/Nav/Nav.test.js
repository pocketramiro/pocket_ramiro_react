import React from 'react';
import { shallow } from 'enzyme';
import Nav from './';

describe('Nav', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Nav/>);
  });


  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a Nav component if isSelected is true', () => {
    const isSelected = {isSelected: {isSelected: true } };
    wrapper.setState({isSelected});
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state', () => {
    const defaultState = {
      isSelected: false,
      title: ''
    };
    expect(wrapper.state()).toEqual(defaultState);
  });


  it('should change isSelected in state to true when clicked', () => {
    wrapper.find('input').simulate('change', { target: { checked: true}});
    expect(wrapper.state('isSelected')).toBe(true);
  });

  it('should update isSelected in state to false when clicked', () => {
    wrapper.find('input').simulate('change', { target: { checked: true}});
    expect(wrapper.state('isSelected')).toBe(true);
    wrapper.find('input').simulate('change', { target: { checked: false}});
    expect(wrapper.state('isSelected')).toBe(false);
  });

  it('should update title with Assets in state when Assets are clicked', () => {
    wrapper.setState({isSelected: true});
    wrapper.update();
    wrapper.find('NavLink').at(0).simulate('click', { target: { name: 'Assets'}});
    expect(wrapper.state('title')).toBe('Assets');
  });
});