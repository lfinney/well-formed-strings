const assert = require('chai').assert;
const balancedFunction = require('./balancedFunction');

describe('Balanced Functions', () => {
  let string;

  it('should be a function', () => {
    assert.isFunction(balancedFunction)
  });

  it('should return true if parenthesis are balanced, ()', () => {
    string = '()'
    assert.equal(balancedFunction(string), true)
  });

  it('should return true if parenthesis are balanced, {}', () => {
    string = '{}'
    assert.equal(balancedFunction(string), true)
  });

  it('should return true if parenthesis are balanced, []', () => {
    string = '[]'
    assert.equal(balancedFunction(string), true)
  });

  it('should return false if parenthesis are unbalanced, )(', () => {
    string = ')('
    assert.equal(balancedFunction(string), false)
  });

  it('should return false if parenthesis are unbalanced, }{', () => {
    string = '}{'
    assert.equal(balancedFunction(string), false)
  });

  it('should return false if parenthesis are unbalanced, ][', () => {
    string = ']['
    assert.equal(balancedFunction(string), false)
  });

  it('should return true if parenthesis are balanced, (())', () => {
    string = '(())'
    assert.equal(balancedFunction(string), true)
  });

  it('should return false if parenthesis are unbalanced, (()', () => {
    string = '(()'
    assert.equal(balancedFunction(string), false)
  });

  it('should return false if parenthesis are unbalanced, ({[)}]', () => {
    string = '([{'
    assert.equal(balancedFunction(string), false)
  });

  it('should return true if parenthesis are balanced, ({[]})', () => {
    string = '({[]})'
    assert.equal(balancedFunction(string), true)
  });

  it('should return false if parenthesis are unbalanced, ({[)}]', () => {
    string = '({[)}]'
    assert.equal(balancedFunction(string), false)
  });

  it('should return true if parenthesis are balanced, ({()[]}[()]{})', () => {
    string = '({()[]}[()]{})'
    assert.equal(balancedFunction(string), true)
  });

  it('should return false if parenthesis are unbalanced, [((){)}]', () => {
    string = '[((){)}]'
    assert.equal(balancedFunction(string), false)
  });
});
