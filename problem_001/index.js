'use strict';

// If we list all the natural numbers below 10 that are multiples of 3 or 5, 
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.


let sumOfMultiples = 0;

// Add multiples of 3
for(let i = 3; i < 1000; i += 3){
  sumOfMultiples += i;
}

// Add multiples of 5
for(let i = 5; i < 1000; i += 5){
  // Skip multiples of 3
  if(i % 3 !== 0){
    sumOfMultiples += i;
  }
}

console.log(sumOfMultiples);