'use strict';
// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = "Coreect Number";
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20
// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value)

let secretNumber  = Math.trunc(Math.random()*20)+1;

let Score = 20;
document.querySelector('.score').textContent=Score;
document.querySelector('.highscore').textContent = 0;

document.querySelector('.again').addEventListener('click',function(){
    document.body.style.backgroundColor='black'
    secretNumber  = Math.trunc(Math.random()*20)+1;    
    Score = 20;
    document.querySelector('.score').textContent=Score;
    document.querySelector('.guess').value='';
    document.querySelector('.message').textContent="Start guessing"
    
})


document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    
    if(!guess)
      {
        document.querySelector('.message').textContent='⛔ No Number!';
        Score--;
        document.querySelector('.score').textContent=Score;
      }
    else if (guess === secretNumber)
      {
        document.querySelector('.message').textContent='🎉 Correct Number!';
        const highScore =Number(document.querySelector('.highscore').textContent);
        document.querySelector('.highscore').textContent=highScore<Score ? Score : highScore;
        document.body.style.backgroundColor='green'
        
      }
    else if (guess > secretNumber)
        {
            if(Score > 1)
             {
                document.querySelector('.message').textContent='↗ Too High!';
                Score--;
                document.querySelector('.score').textContent=Score;
             }
             else{
                
                document.querySelector('.message').textContent='💥 You Lost the game';
                
                document.querySelector('.score').textContent=0;
             }

        }
    else if (guess < secretNumber)
        {
           
            if(Score > 1)
            {
                document.querySelector('.message').textContent='↘ Too Low!';       
                Score--;
               document.querySelector('.score').textContent=Score;
            }
            else{
               
               document.querySelector('.message').textContent='💥 You Lost the game';
               
               document.querySelector('.score').textContent=0;
            }
        }
 })