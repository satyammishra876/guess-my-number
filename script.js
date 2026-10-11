'use strict';
document.querySelector('.message') .textContent = 'start guesing';
document.querySelector('.score').textContent = 25;


let number = Math.trunc(Math.random()*20)+1
let score = 20;
let highscore = 0;

document.querySelector('.number').textContent = number;

  document.querySelector('.check').addEventListener('click',function(){
   const guess = Number(document.querySelector('.guess').value );
  console.log(guess,typeof guess)
   }
  
)
