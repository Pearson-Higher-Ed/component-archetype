import ReactDOM from 'react-dom';
import React    from 'react';

import { default as Component } from '../index.js';

class ComponentWrapper {
  constructor(config) {
    ReactDOM.render( <Component data={config.props} />, document.getElementById(config.elementId) );
  }
}

document.body.addEventListener('o.InitComponent', e => new ComponentWrapper(e.detail));
