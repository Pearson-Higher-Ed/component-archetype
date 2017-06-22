import React         from 'react';
import ReactDOM      from 'react-dom';
import IntlInjection from './IntlInjection';
import { addLocaleData, IntlProvider } from 'react-intl';
// In ES6, you may rename the named export...
import { ComponentOwner as MyComponent } from '../index';

// Import Translations...
import frJson       from './translations/fr.json';
import frLocaleData from 'react-intl/locale-data/fr';
import enUSJson       from './translations/en-US.json';
import enUSLocaleData from 'react-intl/locale-data/en';

// Associate Language Abbreviation with JSON filename...
const translations = {
  'en-US' : enUSJson,
  'fr'    : frJson
};

// Add languages...
addLocaleData(frLocaleData);
addLocaleData(enUSLocaleData);

//
// Example of direct usage of component without translations (assuming US English).
//
ReactDOM.render(
  <MyComponent data={{text: enUSJson}} />,
  document.getElementById('directDemo')
)


//
// Example of consuming the component using React-Intl translation.
//
// Example of how to determine the user's locale.
let locale = (navigator.language) ? navigator.language : navigator.browserLanguage;

// Forcing locale to French for the purpose of simplifying the demo...
locale = 'fr';

ReactDOM.render(
  <IntlProvider locale={locale || 'en'} key={locale} messages={translations[locale]}>
    <IntlInjection />
  </IntlProvider>,
  document.getElementById('translationDemo')
)
