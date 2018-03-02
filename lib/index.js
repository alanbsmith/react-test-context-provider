/**
 * @author Kent C. Dodds <kent@doddsfamily.us> (http://kentcdodds.com)
 * @license MIT
 */

import getContextProvider from './getContextProvider';

function getContextProviderCurried(context, children) {
  if (typeof children === 'undefined') {
    return function getContextProviderGetter() {
      return getContextProvider(context, children);
    };
  }

  return getContextProvider(context, children);
}

export default getContextProviderCurried;
