import React from 'react';
import { shallow } from 'enzyme';
import { App } from './';

describe('App', () => {
  let wrapper, mockSession;
  beforeEach(() => {
    mockSession = {
      user_id: 6,
      name: 'Me',
      role: 'admin'
    };
    wrapper = shallow(<App session={mockSession}/>);
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});



