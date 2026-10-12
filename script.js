'use strict';
document.querySelector('.message') .textContent = 'Start guessing...';
document.querySelector('.score').textContent = 20;



let number = Math.trunc(Math.random()*20)+1
let score = 20;
let highscore = 0;

// document.querySelector('.number').textContent = number;


  document.querySelector('.check').addEventListener('click',function(){
   const guess = Number(document.querySelector('.guess').value );
  console.log(guess,typeof guess)

// console.log("Secret Number is:", number);

if(!guess){
  console.log("Please enter a number")
  document.querySelector('.message').textContent = "Please enter a number"


}

else if(number>guess){
  if(score>1){
  document.querySelector('.message').textContent = "Too Low"
  score--;
    document.querySelector('.score').textContent = score;
    }else {
      document.querySelector('.message').textContent = "You Lost the game"
        document.querySelector('.score').textContent= 0;
    }
  
   } 

else if(number< guess){
  if(score>1){
  document.querySelector('.message').textContent = "Too High"
  score--;  
    document.querySelector('.score').textContent = score;
    console.log(score);
  }else{
    document.querySelector('.message').textContent = "Youy lost the game"
    document.querySelector('.score').textContent= 0;
} 
}

else if(number === guess){

  document.querySelector('.message').textContent = "Correct Number"
    score++;
     document.querySelector('.score').textContent = score;


     if(score > highscore){
      highscore = score;
    document.querySelector('.highscore').textContent = highscore;
    // document.querySelector('body').style.backgroundColor = "#00E5FF"
     }

}

  }
)
document.querySelector('.again').addEventListener('click',function(){
  console.log("btn clicked");
  score = 20;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = "Start guesing..."
  document.querySelector('.guess').value = "";                     
number = Math.trunc(Math.random()*20)+1

// document.querySelector('.number').textContent = number;
 document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})


