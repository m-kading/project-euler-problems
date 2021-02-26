'use strict';

// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

const THRESHOLD = 4000000;
let isUnderThreshold = true;

let previousNum = 1;
let currentNum = 2;

let sumTotal = 0;

while(isUnderThreshold){ 
  if(currentNum % 2 === 0){
    sumTotal += currentNum;
  }

  let temp = currentNum;

  currentNum += previousNum;
  previousNum = temp;

  if(currentNum > THRESHOLD){
    isUnderThreshold = false;
  }
}

console.log(sumTotal)