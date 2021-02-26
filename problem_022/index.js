'use strict';

/*
Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. 
Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. 
So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?
*/

const fs = require('fs');

function main() {
  const questionArray = getFileContents('names.txt');
  questionArray.sort();
  const numArray = getNumValArray(questionArray);
  const multipliedNums = multiplyArrValsByPos(numArray);
  console.log(getSumOfArray(multipliedNums));
}

function getFileContents(fileName){
  let questionData = fs.readFileSync(`${__dirname}/${fileName}`, 'utf8');
  questionData = questionData.replace(/"/g, '')
  return questionData.split(',');
}

function getNumValArray(stringArr){
  const numArray = [];
  for(let i = 0; i < stringArr.length; i++){
    numArray.push(getNumTotalOfString(stringArr[i]));
  }
  return numArray;
}

function getNumTotalOfString(stringVal){
  let total = 0;
  for(let i = 0; i < stringVal.length; i++){
    total += (stringVal[i].charCodeAt(0) - 64);
  }
  return total;
}

function multiplyArrValsByPos(numArray){
  const multipliedNumArr = [];
  for(let i = 0; i < numArray.length; i++){
    multipliedNumArr.push(numArray[i] * (i+1));
  };
  return multipliedNumArr;
}

function getSumOfArray(queryArray){
  return queryArray.reduce((total, value) => {
    return total + value;
  });
}

main();