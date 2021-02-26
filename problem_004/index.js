'use strict';

/*
A palindromic number reads the same both ways. 
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

function isNumPalindrome(queryNum){
  let isPalindrome = true; 
  const queryNumString = queryNum.toString();
  
  for(let i = 0;  i <= queryNumString.length/2; i ++){
    if(queryNumString[i] !== queryNumString[queryNumString.length - (i+1) ]){
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
}

function isValidMultiple(queryNum){
  let isValid = false;
  
  for(let i = 100; i < 1000; i++){
    if(queryNum % i === 0 && queryNum/i > 99 && queryNum/i < 1000){
      isValid = true;
      break;
    }
  }

  return isValid;
}

for(let i = 999*999; i >= 100*100; i--){
  if(isNumPalindrome(i) && isValidMultiple(i)){
    console.log(i);
    break;
  }
}