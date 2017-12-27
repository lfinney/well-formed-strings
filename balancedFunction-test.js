const assert = require('chai').assert;
const balancedFunction = require('./balancedFunction');

describe('Balanced Functions', () => {
  it('should be a function', () => {
    assert.isFunction(balancedFunction)
  })
});
