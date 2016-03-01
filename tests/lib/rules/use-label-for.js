/**
 * @fileoverview Enforce label tags have htmlFor attribute.
 * @author Ethan Cohen
 */

'use strict';

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

import rule from '../../../lib/rules/use-label-for';
import { RuleTester } from 'eslint';

const parserOptions  = {
  ecmaVersion: 6,
  ecmaFeatures: {
    jsx: true
  }
};

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester();

const expectedError = {
  message: 'Form controls using a label to identify them must be ' +
  'programmatically associated with the control using htmlFor',
  type: 'JSXOpeningElement'
};

ruleTester.run('use-label-for', rule, {
  valid: [
    { code: '<label htmlFor="foo" />', parserOptions },
    { code: '<div />', parserOptions },
    { code: '<label htmlFor="foo">Test!</label>', parserOptions }
  ],
  invalid: [
    { code: '<label id="foo" />', errors: [ expectedError ], parserOptions },
    { code: '<label>First Name</label>', errors: [ expectedError ], parserOptions },
    { code: '<label {...props}>Foo</label>', errors: [ expectedError ], parserOptions }
  ]
});
