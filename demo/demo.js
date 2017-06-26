import React         from 'react';
import ReactDOM      from 'react-dom';
import IntlInjection from './IntlInjection';
import { addLocaleData, IntlProvider } from 'react-intl';
// Import Translations...
import frJson       from './translations/fr.json';
import frLocaleData from 'react-intl/locale-data/fr';
import enUSJson       from './translations/en-US.json';
import enUSLocaleData from 'react-intl/locale-data/en';

//
// Example of consuming the component using React-Intl translation.
//

let   language = 'en-US';
const search = window.location.search,
      getQueryParam = (paramName, defaultValue) => {
        let value = defaultValue;
        const name = paramName.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp(`[\\?&]${name}=([^&#]*)`);
        const results = regex.exec(window.location.search);

        if (results !== null) {
          value = decodeURIComponent(results[1].replace(/\+/g, ' '));
        }

        return value;
      },
      // Associate Language Abbreviation with JSON filename...
      translations = {
        'en-US' : enUSJson,
        'fr'    : frJson
      };

// Add supported languages...
addLocaleData(frLocaleData);
addLocaleData(enUSLocaleData);

// Parse query string to determine demo language
if (search) {
  language = getQueryParam('lang', language);
}

// Get component's text translations based on user's language.
ReactDOM.render(
  <IntlProvider locale={language} key={language} messages={translations[language]}>
    <IntlInjection />
  </IntlProvider>,
  document.getElementById('translationDemo')
)
