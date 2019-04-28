'use strict';

function isPrime(possiblePrime) {
  if (possiblePrime % 2 === 0 && possiblePrime > 2) {
    return false;
  }

  for(let i = 3; i <= Math.sqrt(possiblePrime); i += 2) {
    if (possiblePrime % i === 0) {
      return false;
    }
  }

  return true;
}

function findLargestPrimeFactor(inputMultiple) {
  for (let i = 2; i < Math.ceil(inputMultiple / 2); i ++ ) {
    if (inputMultiple % i === 0 && isPrime(inputMultiple / i)) {
      return inputMultiple / i;
    }
  }
}

const inputMultiple = process.argv[2] || 600851475143;
const largestPrimeFactor = findLargestPrimeFactor(inputMultiple);

console.log(
  `The largest prime factor of ${inputMultiple} is ${largestPrimeFactor}`
);
