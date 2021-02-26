'use strict';

/*
You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/

const FIRST_YEAR = 1901;
const LAST_YEAR = 2000;
const FIRST_DAY = 2; // Jan 1901 started on a tuesday

const monthLengthFunctions = [
  () => {return 31},
  (isLeapYear) => {return isLeapYear? 29 : 28},
  () => {return 31},
  () => {return 30},
  () => {return 31},
  () => {return 30},
  () => {return 31},
  () => {return 31},
  () => {return 30},
  () => {return 31},
  () => {return 30},
  () => {return 31}
];

// console.log(monthLengthFunctions[10](false))

let totalSundaysOnFirst = 0;
let currentDayOnFirst = FIRST_DAY; 

let isLeapYear = false;

for(let year = FIRST_YEAR; year <= LAST_YEAR; year ++){
  isLeapYear  = (year % 4 === 0)? true : false;

  for(let month = 0; month < 12; month ++){
    // If first of the month is a sunday
    if(currentDayOnFirst % 7 === 0){
      totalSundaysOnFirst ++;
    }

    currentDayOnFirst += monthLengthFunctions[month](isLeapYear);
  }
}

console.log(totalSundaysOnFirst)