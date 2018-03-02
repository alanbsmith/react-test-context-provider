import PropTypes from 'prop-types';
import React, { Children, Component } from 'react';

import { TOGGLE_TEST_CONTEXT } from './constants';

const Button = ({ children, ...rest }) => <button {...rest}>{children}</button>;

function buttonWithContext(props, context) {
  const { handleToggle } = context[TOGGLE_TEST_CONTEXT];
  return <Button onClick={handleToggle}>{props.children}</Button>;
}

buttonWithContext.contextTypes = {
  [TOGGLE_TEST_CONTEXT]: PropTypes.object.isRequired,
};

class TestSwitch extends Component {
  static Button = buttonWithContext;
  static childContextTypes = {
    [TOGGLE_TEST_CONTEXT]: PropTypes.object.isRequired,
  };

  toggleSwitch() {
    console.log('toggling!');
  }

  getChildContext() {
    return {
      [TOGGLE_TEST_CONTEXT]: {
        handleToggle: this.toggleSwitch,
      },
    };
  }

  render() {
    const { children, ...rest } = this.props;
    return <div {...rest}>{children}</div>;
  }
}

export default TestSwitch;
