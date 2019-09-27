'use strict'

function sort(input) {
  let len = input.length;
  for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
          if (input[j] > input[j + 1]) {
              let temp = input[j];
              input[j] = input[j + 1];
              input[j + 1] = temp;
          }
      }
  }
  return input;
}

module.exports = sort
