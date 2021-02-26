'use strict';

/*
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/

class BigNumber {
  constructor(startNumber){
    this.digits = [[startNumber]]
    this.handleCarryOver();
  }

  handleCarryOver(){
    for(let digitIndex = this.digits.length - 1; digitIndex >= 0; digitIndex --){
      const chunkAsString = this.digits[digitIndex].toString();
      
      if(chunkAsString.length > 1){
        const carryOver = chunkAsString.slice(0, chunkAsString.length-1);
        const remainder = chunkAsString.slice(-1);

        this.digits[digitIndex] = parseInt(remainder);
        
        if(digitIndex === 0){
          const carryOverDigits = this.convertArrayToIntDigits(carryOver.split(''));
          this.digits = carryOverDigits.concat(this.digits);
        } else {
          this.digits[digitIndex-1] += parseInt(carryOver);        
        }
      }
    }
  }

  convertArrayToIntDigits(digits){
    const newDigits = JSON.parse(JSON.stringify(digits));
    for(let i = 0; i < newDigits.length; i ++){
      newDigits[i] = parseInt(newDigits[i]);
    }

    return newDigits
  }

  multiplyDigitsBy(multiple){
    for(let i = 0; i < this.digits.length; i ++){
      this.digits[i] = this.digits[i] * multiple;
    }

    this.handleCarryOver();
  }

  getDigitsAsString(){
    return this.digits.join('');
  }
}


const NUM_FOR_FACTORIAL = 100;

let  factorial = new BigNumber(1);
for(let i = 1; i <= NUM_FOR_FACTORIAL; i++){
  factorial.multiplyDigitsBy(i);
}

const totalOfDigits = factorial.digits.reduce((total, currentVal) => {
  return total += currentVal;
});

console.log(totalOfDigits);