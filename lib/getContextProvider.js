import { Component, createElement } from 'react';
import PropTypes from 'prop-types';

function getContextProvider(context, children) {
  function childContextTypes() {
    return Object.keys(context).reduce((obj, key) => {
      obj[key] = PropTypes.any;
      return obj;
    }, {});
  }

  class ContextProvider extends Component {
    static childContextTypes = childContextTypes();
    static displayName = 'ContextProvider';

    getChildContext() {
      return context;
    }

    render() {
      return children;
    }
  }

  return createElement(ContextProvider, null);
}

export default getContextProvider;
