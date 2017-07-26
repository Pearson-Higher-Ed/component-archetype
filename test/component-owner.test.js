/* global describe it expect */

import React              from 'react';
import { ComponentOwner } from '../index';
import { shallow }        from 'enzyme';

describe('Component Owner Suite',() => {

  beforeEach(function() {
    const data = {text:{greeting:"Hi there!", buttonText:"say hello", placeholder: "placeholder"}};
    this.wrapper = shallow(<ComponentOwner data={data} />);
  });

  it('shallowly renders the component', function () {
    expect(this.wrapper.node.type).toEqual('div');
  });

  it('renders the correct text when the button is clicked', function () {
    this.wrapper.find('button').simulate('click');
  });

});
