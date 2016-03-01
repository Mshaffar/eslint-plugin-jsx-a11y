/**
 * @fileoverview Enforce no accesskey attribute on element.
 * @author Ethan Cohen
 */

'use strict';

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

import rule from '../../../lib/rules/no-access-key';
import { RuleTester } from 'eslint';

const parserOptions = {
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
  message: 'No access key attribute allowed. Incosistencies ' +
  'between keyboard shortcuts and keyboard comments used by screenreader ' +
  'and keyboard only users create a11y complications.',
  type: 'JSXOpeningElement'
};

ruleTester.run('no-access-key', rule, {
  valid: [
    { code: '<div />;', parserOptions },
    { code: '<div {...props} />', parserOptions }
  ],
  invalid: [
    { code: '<div accesskey="h" />', errors: [ expectedError ], parserOptions },
    { code: '<div accessKey="h" />', errors: [ expectedError ], parserOptions },
    { code: '<div accessKey="h" {...props} />', errors: [ expectedError ], parserOptions },
    { code: '<div acCesSKeY="y" />', errors: [ expectedError ], parserOptions }
  ]
});
