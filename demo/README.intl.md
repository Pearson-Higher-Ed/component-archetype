## Internationalization Flow in Demo

1. In /src/js/component-owner.js, the component's localized values are passed to the component in this.props.data.

2. In /demo/translations, the localized values are defined as React-Intl messages, and the JSON translation files per 
supported locale are provided.

3. In /demo/intlInjection.js, the intl.formatMessage() is applied to the defined messages, which are passed to the 
component as the data attribute. The component is wrapped and injected with the React-Intl 'intl' object that abstracts 
the React context.

4. In /demo/demo.js, the locale is determined from the URL query parameter. The translations and locale formatting data 
are imported. The wrapped component is wrapped with IntlProvider, to allow the passing in of locale and translations at 
run-time selection of the locale. The component is then rendered by React.
