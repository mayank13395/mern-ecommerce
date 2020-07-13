import React from 'react';
import { shallow } from 'enzyme';
import NavTop from './NavTop';

describe('NavTop', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<NavTop />);
    expect(wrapper).toMatchSnapshot();
  });
});
