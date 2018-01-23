import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../../src/app/components/Home.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('ScrapeNavbar Component', () => {
  const wrapper = mount(<Home />);

  test('should have an img tag ', () => {
    expect(wrapper.find('img')).toHaveLength(1);
  });
});
