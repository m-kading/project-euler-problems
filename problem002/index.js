'use strict';

function isEven(possibleEvenNum){
  return possibleEvenNum % 2 === 0;
}

const upperBound = process.argv[2] || 4000000;
let totalSum = 0;

let prevNum = 1;
let currentNum = 1;
// the wording of the problem states to include numbers that do not
// exceed four million, so the upper bound will be included
while (currentNum <= upperBound) {
  if(isEven(currentNum)){
    totalSum += currentNum;
  }
  let temp = currentNum;
  currentNum += prevNum;
  prevNum = temp;
}

console.log(`The sum of all even fibonacci numbers below ${upperBound} is ${totalSum}`);
