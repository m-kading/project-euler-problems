'use strict';

const fs = require('fs');

/*
Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.
[See Input.txt file]
*/

const questionData = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');
const questionNumbers = questionData.split(/\r?\n/)

const chunkedNumbers = [];

for(let i = 0; i < questionNumbers.length; i++){
  chunkedNumbers.push(questionNumbers[i].split(''))
}

let carryOver = 0;
let answerDigits = [];

for(let j = (chunkedNumbers[0].length - 1); j >= 0; j --){
  let total = carryOver;

  for(let i = 0; i < chunkedNumbers.length; i ++){
    total += parseInt(chunkedNumbers[i][j]);
  }

  console.log(total)
  total = total.toString();

  answerDigits = [total.slice(-1)].concat(answerDigits)
  carryOver = total.slice(0, total.length-1) || 0
  carryOver = parseInt(carryOver);
}

answerDigits = [carryOver.toString()].concat(answerDigits)

// console.log(questionNumbers[0]);
console.log(answerDigits.join('').slice(0,10));