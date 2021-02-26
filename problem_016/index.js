'use strict';

/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?
*/

function deepCopy(objectToCopy){
  const newCopy = JSON.parse(
    JSON.stringify(objectToCopy)
  );

  return newCopy;
}

function processCarryOver(chunkedNumber){
  let chunkedDigits = deepCopy(chunkedNumber);

  for(let j = chunkedDigits.length - 1; j >= 0; j --){
    const chunkAsString = chunkedDigits[j].toString();
    
    if(chunkAsString.length > 1){
      const carryOver = chunkAsString.slice(0, chunkAsString.length-1);
      const remainder = chunkAsString.slice(-1);

      chunkedDigits[j] = parseInt(remainder);
      
      if(j === 0){
        chunkedDigits = [parseInt(carryOver)].concat(chunkedDigits);
      } else {
        chunkedDigits[j-1] += parseInt(carryOver);        
      }
    }
  }

  return chunkedDigits;
}

const START_NUM = 2;
const POWER = 1000;

let chunkedNumber = [START_NUM];

for(let i = 1; i < POWER; i++){
  for(let j = 0; j < chunkedNumber.length; j ++){
    chunkedNumber[j] = chunkedNumber[j] * START_NUM;
  }
  
  chunkedNumber = processCarryOver(chunkedNumber);
}

console.log(chunkedNumber);

let sum = chunkedNumber.reduce( function(total, digit){
  return total + digit
});

console.log(sum);