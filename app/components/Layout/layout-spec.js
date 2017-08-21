import React from 'react';
import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

import Layout from 'components/Layout';

describe('Layout', () => {
  beforeEach(jasmineEnzyme);
  it('should render a <div> tag', () => {
    const renderedComponent = shallow(<Layout />);
    expect(renderedComponent).toHaveTagName('div');
  });
});
