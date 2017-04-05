import React, { PropTypes, Component } from 'react';
import { intlShape, injectIntl }       from 'react-intl';
import { messages }                    from '../translations/defaultMessages';
import { default as MyComponent }      from '../index';


class IntlInjection extends Component {

  render() {

    const { data, intl } = this.props;

    // do the string replacement...
    const intlText =  {
      headerTitle           : intl.formatMessage(messages.headerTitle),
      bodyText              : intl.formatMessage(messages.bodyText),
      closeButtonSRText     : intl.formatMessage(messages.closeButtonSRText),
      modalSaveButtonText   : intl.formatMessage(messages.modalSaveButtonText),
      modalCancelButtonText : intl.formatMessage(messages.modalCancelButtonText)
    };

    // add text to config data...
    data.text =  data.text || intlText ;

    return <MyComponent data={data} />

  }

}

export default injectIntl(IntlInjection);
