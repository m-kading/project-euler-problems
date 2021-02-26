'use strict';

const factors = [];

for(let i = 600851475143; i > 0; i-=2){
  if(600851475143 % i === 0){
    factors.push(i);
    console.log(factors);
  }
}