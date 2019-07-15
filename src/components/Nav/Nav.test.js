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
      isSelected: false
    }
    expect(wrapper.state()).toEqual(defaultState)
  })

});