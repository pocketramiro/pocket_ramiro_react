import React from 'react';
import { shallow } from 'enzyme';
import Nav from './';

describe('Nav', () => {
  let wrapper 
  beforeEach(() => {
    wrapper = shallow(<Nav/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should render a Nav component if isSelected is true', () => {
    const isSelected = {isSelected: {isSelected: true } }
    wrapper.setState({isSelected})
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  })

});