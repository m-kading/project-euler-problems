'use strict';

/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

function isEven(queryNum){
  return queryNum % 2 === 0;
}

function getNextInSequenceFromEven(currentInSequence){
  return  currentInSequence / 2;
}

function getNextInSequenceFromOdd(currentInSequence){
  return  (3 * currentInSequence) + 1;
}

function getNextInSequence(currentInSequence){
  if(isEven(currentInSequence)){
    return getNextInSequenceFromEven(currentInSequence);
  } else {
    return getNextInSequenceFromOdd(currentInSequence);
  }
}

let largestChain = 0;
let largestChainStartNum = 0;

for(let i = 1; i < 1000000; i++){
  let currentInSequence = i;
  let iterationCount = 1;

  while(currentInSequence !== 1){
    iterationCount ++;
    currentInSequence = getNextInSequence(currentInSequence);
  }

  if(iterationCount > largestChain) {
    largestChain = iterationCount;
    largestChainStartNum = i;
  }
}

console.log(`largestChain:\t\t${largestChain}`);
console.log(`largestChainStartNum:\t${largestChainStartNum}`);