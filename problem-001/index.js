'use strict';

function isMultipleOf(factor, multiple) {
  return multiple % factor === 0;
}

const upperBound = process.argv[2] || 1000;
let totalSum = 0;

for (let i = 0; i < upperBound; i++){
  if (isMultipleOf(3, i) || isMultipleOf(5, i)) {
    totalSum += i;
  }
}

console.log(`The sum of all factors of 3 and 5 under ${upperBound} is ${totalSum}`);
