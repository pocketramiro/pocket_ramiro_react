import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer } from './';
import * as MD from '../../Utility/MockData';

describe('CardContainer', () => {
  let wrapper, mock_dataKey;

  beforeEach(() => {
    mock_dataKey = ['tickets', 'resources'];
    wrapper = shallow(<CardContainer
      dataKey={mock_dataKey[0]}
      tickets={MD.tickets}
    />);
  });

  describe('componentDidMount', () => {
    xit('should call getTickets', () => {
      jest.spyOn(wrapper.instance(), 'getTickets');
      wrapper.instance().componentDidMount();
      expect(wrapper.instance().getTickets).toHaveBeenCalled();
    });
  });
});