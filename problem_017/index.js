'use strict';

/*
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
*/


function getDigitName(number, searchDict){
  const searches = Object.keys(searchDict);

  for(let i = 0; i < searches.length; i++){
    const regExp = new RegExp(searches[i]);
    const match = number.toString().match(regExp);
    if(match !== null){
      return searchDict[searches[i]];
    }
  }

  return '';
}

const UP_TO_NUM = 1000;

const firstDigitSearch = {
  "([^1]1$|^1$)": "one",
  "([^1]2$|^2$)": "two",
  "([^1]3$|^3$)": "three",
  "([^1]4$|^4$)": "four",
  "([^1]5$|^5$)": "five",
  "([^1]6$|^6$)": "six",
  "([^1]7$|^7$)": "seven",
  "([^1]8$|^8$)": "eight",
  "([^1]9$|^9$)": "nine"
}

const secondDigitSearch = {
  "10$": "ten",
  "11$": "eleven",
  "12$": "twelve",
  "13$": "thirteen",
  "14$": "fourteen",
  "15$": "fifteen",
  "16$": "sixteen",
  "17$": "seventeen",
  "18$": "eighteen",
  "19$": "nineteen",
  "2.$": "twenty",
  "3.$": "thirty",
  "4.$": "forty",
  "5.$": "fifty",
  "6.$": "sixty",
  "7.$": "seventy",
  "8.$": "eighty",
  "9.$": "ninety"
};

const thirdDigitSearch = {
  "1..$": "one hundred",
  "2..$": "two hundred",
  "3..$": "three hundred",
  "4..$": "four hundred",
  "5..$": "five hundred",
  "6..$": "six hundred",
  "7..$": "seven hundred",
  "8..$": "eight hundred",
  "9..$": "nine hundred"
}

let total = 0;

for(let i = 1; i <= UP_TO_NUM; i ++){
// for(let i = 342; i === 342; i ++){
  
  let stringNum = getDigitName(i, firstDigitSearch); 

  if(i > 9){
    stringNum = getDigitName(i, secondDigitSearch) + " " + stringNum;
  }

  if(i > 99){
    if (stringNum.match(/[a-z]/g) === null){
      stringNum = getDigitName(i, thirdDigitSearch)
    } else {
      stringNum = getDigitName(i, thirdDigitSearch) + " and " + stringNum; // May need to add 'and'
    }
  }

  if(i === 1000){
    stringNum = "one thousand"
  }

  let parsedName = stringNum.replace(/ /g, '');
  total += parsedName.length;
}

console.log(total);