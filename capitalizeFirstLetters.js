
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
module.exports = capitalizeFirstLetters;