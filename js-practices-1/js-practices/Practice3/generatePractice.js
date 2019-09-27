'use strict'

function generate(testLengthArray){
  function search(input, target) {
    for (var k=0; k < input.length; k++){
        if(input[k] === target){
          return k;
        }
      }
      return -1;
  }
  function sort(input) {
    //Bubble sort
    var len = input.length;
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
  let arr = [];
  for (let i = 0; i < testLengthArray.length; i++) { 
    let input = [];
    for ( let j = 0; j < testLengthArray[i]; j++ ) {   
      let randomNumber = Math.floor(Math.random() * 1000);
      input.push(randomNumber);
    }
    input = sort(input);
    let randomTarget;
    if (i === 0) {
      randomTarget = input[0];
    }
    else if (i === testLengthArray.length - 1) {
      randomTarget = input[input.length - 1];
    }
    else {
      let randomTarget = Math.floor(Math.random() * 1000);
    }
    let output = search(input, randomTarget)
    let item = {
        input: input,
        target: randomTarget,
        output: output
    }
    arr.push(item)
  }
  return arr;
}

module.exports = generate
