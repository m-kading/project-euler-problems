'use strict';

/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

function isNumValidMultiple(queryNum){
  let isValid = true;

  for(let i = 2; i <= 20; i ++){
    if(queryNum % i !== 0){
      isValid = false;
      break;
    }
  }

  return isValid;
}

for(let i = 19*20; true; i += 20){
  if(isNumValidMultiple(i)){
    console.log(i);
    break;
  }
}
