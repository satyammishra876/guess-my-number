'use strict';
document.querySelector('.message') .textContent = 'start guesing';
document.querySelector('.score').textContent = 25;


let number = Math.trunc(Math.random()*20)+1

document.querySelector('.number').textContent = number;

document.querySelector('check').addEventListener('click',function(){
    console.log("click")
))
