'use strict';

/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

function isNumPrime(queryNum) {
  if(queryNum === 2){
    return true;
  }
  
  if(queryNum % 2 === 0){
    return false;
  }
  
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

let queryNum = 1;
let primeCount = 0;

while(primeCount != 10001){
  queryNum ++;
  if(isNumPrime(queryNum)){
    primeCount ++;
  }
}

console.log(queryNum);