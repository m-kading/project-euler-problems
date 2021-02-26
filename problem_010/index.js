'use strict';

/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
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

let primeSumTotal = 0;

for(let i = 2; i < 2000000; i++){
  if(isNumPrime(i)) {
    primeSumTotal += i;
  }
}

console.log(primeSumTotal);