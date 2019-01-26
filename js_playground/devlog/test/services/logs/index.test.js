'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('logs service', function() {
  it('registered the logs service', () => {
    assert.ok(app.service('logs'));
  });
});
