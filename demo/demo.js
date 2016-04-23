'use strict';

import * as PearsonComponent from '../main'; // for direct API usage
// would actually be:
// import * as PearsonComponent from '@pearson-components/my-component';

function init() {

  // Demo eventing API
  document.body.dispatchEvent(new CustomEvent('o.InitMyComponent', {
    detail: {
      elementId: 'demo-target1',
      greeting: 'Hello world!'
    }
  }));

  // Demo direct API
  new PearsonComponent.MyComponent({
    elementId: 'demo-target2',
    greeting: 'Bonjour le monde!',
    locale: 'fr-CA'
  });

}

window.onload = init;
