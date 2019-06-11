// test/Rectangle.test.js
const assert = require('assert');
const Rectangle = require('../Rectangle');

// give the test suite a label using describe
describe('Rectangle', () => {
  // give the test a label using it

  it('isSquare checking', () => {
    assert.strictEqual(new Rectangle(4, 4).isSquare(), true);
  });

  it('getArea checking', () => {
    assert.strictEqual(new Rectangle(13, 7).getArea(), 91);
  });

  it('getPerimeter', () => {
    assert.strictEqual(new Rectangle(13, 7).getPerimeter(), 40);
  });


});
