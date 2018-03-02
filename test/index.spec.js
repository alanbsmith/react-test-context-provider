import React from 'react';
import renderer from 'react-test-renderer';
import getElementWithContext from '../lib';

import { TOGGLE_TEST_CONTEXT } from './constants';

import TestSwitch from './TestSwitch';

const context = {
  [TOGGLE_TEST_CONTEXT]: {
    handleToggle: () => {},
  },
};

describe('TestSwitch.Button', () => {
  it('renders correctly', () => {
    const element = getElementWithContext(
      context,
      <TestSwitch>
        <TestSwitch.Button>button text</TestSwitch.Button>
      </TestSwitch>,
    );
    const component = renderer.create(element);
    expect(component).toMatchSnapshot();
  });
});
