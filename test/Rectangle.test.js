// test/Rectangle.test.js
const assert = require('assert');
const Rectangle = require('../Rectangle');

// give the test suite a label using describe
describe('Rectangle', () => {
  // give the test a label using it

  it('isSquare checking', () => {
    assert.strictEqual(Rectangle.isSquare(4, 4), true);
  });

  it('getArea checking', () => {
    assert.strictEqual(Rectangle.getArea(13, 7), 91);
  });

  it('getPerimeter', () => {
    assert.strictEqual(Rectangle.getPerimeter(13, 7), 40);
  });


});
