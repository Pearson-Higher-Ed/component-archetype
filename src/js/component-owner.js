import '../scss/component-specific.scss';

import React, { Component } from 'react';
import { messages }         from './../../translations/defaultMessages';


class ComponentOwner extends Component {

  constructor(props) {

    super(props);

    //
    // FOR DEMO - use state when you need to respond to user input, a server request or the passage of time
    //
    this.state = {
      text: ''
    };
  }

  //
  // Note that combining the fat arrow syntax with ES7 class properties (transpiled by Babel Stage 0), we eliminate the
  // need to do manual binding of the 'this' context in event handlers or callbacks. React binds all other contexts
  // as expected.
  //
  // FOR DEMO and should be removed:
  _change = () => {
    this.setState({text: this.props.data.greeting});
  };

  render() {

    const {formatMessage} = this.props.intl;
    //
    // FOR DEMO and should be refactored for your purposes:
    //
    return (
      <div className="pe-inlineblock">
        <button className="pe-btn--primary" onClick={this._change}>{formatMessage(messages.buttonText)}</button>
        &nbsp;
        <span className="pe-input">
          <input type="text" placeholder={formatMessage(messages.placeholder)} value={this.state.text} />
        </span>
      </div>
    )
  }

}


export default ComponentOwner;
