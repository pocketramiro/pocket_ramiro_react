import React from 'react';
import { shallow } from 'enzyme';
import { PartForm } from './';

describe('PartForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PartForm/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});