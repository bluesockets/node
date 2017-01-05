'use strict';
require('../common');
const assert = require('assert');
const vm = require('vm');

var sandbox = { setTimeout: setTimeout };

var ctx = vm.createContext(sandbox);

vm.runInContext('setTimeout(function() { x = 3; }, 0);', ctx);
setTimeout(function() {
  assert.strictEqual(sandbox.x, 3);
  assert.strictEqual(ctx.x, 3);
}, 1);
