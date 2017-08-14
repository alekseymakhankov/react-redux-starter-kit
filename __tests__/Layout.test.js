import React from 'react';
import { shallow } from 'enzyme';

import Layout from 'components/Layout';

describe('Layout <Layout />', () => {
  it('should render a <div> tag', () => {
    const renderedComponent = shallow(<Layout />);
    expect(renderedComponent).toHaveTagName('span');
  });
});
