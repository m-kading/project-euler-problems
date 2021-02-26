'use strict';

/*
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/

// Get divisors for a
// Sum divisors for a
// Sum = b
// Get divisors for b
// Sum divisors for b
// If sum for b = a, record pair

function main() {
  const UPPER_BOUND = 10000;
  const amicableNumbers = [];

  for(let a = 2; a < UPPER_BOUND; a++){
    const divisorsOfA = getDivisorsForNum(a);
    const b = getSumOfArray(divisorsOfA);

    const divisorsOfB = getDivisorsForNum(b);
    const sumOfDivisorsForB = getSumOfArray(divisorsOfB);

    if(a !== b && a === sumOfDivisorsForB){
      amicableNumbers.push(a);
      amicableNumbers.push(b);
    }
  }

  const uniqueAmicableNumbers = removeDuplicatesFromArray(amicableNumbers)
  console.log(uniqueAmicableNumbers);
  console.log(getSumOfArray(uniqueAmicableNumbers));
}

function getDivisorsForNum(queryNum) {
  const divisors = [1];
  for(let i = 2; i <= Math.sqrt(queryNum); i++){
    if(isFactor(queryNum, i)){
      if(isSquareRoot(queryNum, i)){
        divisors.push(i);
      } else {
        divisors.push(i);
        divisors.push(queryNum / i);
      }
    }
  }
  return divisors;
}

function isFactor(multiple, divisor){
  return (multiple % divisor === 0);
}

function isSquareRoot(multiple, divisor){
  return (multiple / divisor === divisor);
}

function getSumOfArray(queryArray){
  return queryArray.reduce((total, value) => {
    return total + value;
  });
}

function removeDuplicatesFromArray(array){
  return array.filter((value, index) => {
    return array.indexOf(value) === index;
  });
}

main();