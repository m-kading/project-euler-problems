'use strict';

// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143?

// Things to note:
//  - Largest factor can only be half of the number
//  - All primes are odd
//  - If no factor is found before the square root of a number, it is prime

const QUESTION_NUMBER = 600851475143;

// For every number i, that the question number can be divided by, check if the result is prime
for(let i = 2; i < (QUESTION_NUMBER/2); i ++){
  if(QUESTION_NUMBER % i === 0){
    const factor = QUESTION_NUMBER / i;
    if(isNumPrime(factor)){
      console.log(QUESTION_NUMBER/i);
      break;
    }
  }
}

function isNumPrime(queryNum) {
  let isPrime = true;
  
  // If a factor can not be found by the square root of the number, it can be considered prime
  for(let i = 3;  i <= Math.sqrt(queryNum); i += 2){
    if(queryNum % i === 0){ 
      isPrime = false;
      break;
    }
  }

  return isPrime;
}