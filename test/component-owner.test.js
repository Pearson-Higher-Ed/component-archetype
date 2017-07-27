/* global describe it expect */

import React              from 'react';
import { ComponentOwner } from '../index';
import { shallow }        from 'enzyme';

describe('Component Owner Suite', () => {

  const data = {text:{greeting:"Hi there!", buttonText:"say hello", placeholder: "placeholder"}};
  const wrapper = shallow(<ComponentOwner data={data} />);

  it('shallowly renders the component', () => {
    expect(wrapper.node.type).toEqual('div');
  });

  it('renders the correct text when the button is clicked', () => {
    wrapper.find('button').simulate('click');
  });

});
