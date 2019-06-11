// Fonction capitalizeFirstLetters

// capitalizeFirstLetters.js
const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE

function capitalizeFirstLetters(input) {
  let result = ''
  if (input.length <= 0) {
    return '';

  } else {
    for (let i = 0; i < input.length; i++) {
      if (input[i - 1] === " " || i === 0) {
        result += (input[i].toUpperCase());
      }
      else if (i !== 0) {
        result += input[i];
      }
    }
    return result;
  }
}

// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');
// Check that capitalizeFirstLetters accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);
// Check that capitalizeFirstLetters transforms javaScript correctly
assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');
// Check that capitalizeFirstLetters transforms javaScript correctly with few words
assert.strictEqual(capitalizeFirstLetters('javaScript is a fucking awesome language'), 'JavaScript Is A Fucking Awesome Language');
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');