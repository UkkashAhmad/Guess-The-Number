let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;
document.querySelector(".score").textContent = score;

document.querySelector(".btn-submit").addEventListener("click", function () {
  const guess = Number(document.querySelector(".num").value);
  console.log(guess);
  if (!guess) {
    document.querySelector(".result").textContent = "⛔ Please Write a Number";
    document.querySelector("body").style.backgroundColor = "#f30f0f";
  } else 
  
  
  if (guess === secretNumber) {
    document.querySelector(".result").textContent = "🎉 Correct Guess";
    document.querySelector(".logo").textContent = secretNumber;
    

    document.querySelector("body").style.backgroundColor = "#0cec2a";
    score++;
    document.querySelector(".score").textContent = score;
    highScore++;
    document.querySelector(".highscore").textContent = highScore;
    // document.querySelector('.logo').style.width = '10%'
  } else 
  
  
  if (guess > secretNumber) {
    document.querySelector(".result").textContent = "Too High";
    document.querySelector("body").style.backgroundColor = "#f30f0f";

    score--;
    document.querySelector(".score").textContent = score;
  } else 
  
  
  if (guess < secretNumber) {
    document.querySelector(".result").textContent = "Too Low";
    document.querySelector("body").style.backgroundColor = "#f30f0f";

    score--;
    document.querySelector(".score").textContent = score;
  }
  
  
  
  if (score < 0) {
    document.querySelector(".result").textContent = "You Lose";
    document.querySelector("body").style.backgroundColor = "#f30f0f";

  }
});

document.querySelector(".btn-retry").addEventListener("click", () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 10;
  document.querySelector(".score").textContent = score;
  highScore = 0;
  document.querySelector(".highscore").textContent = highScore;
  document.querySelector(".result").textContent =" 🎉 Start guessing ...";
  document.querySelector("body").style.backgroundColor = '#2b2828'
  document.querySelector(".logo").textContent = '?'
  document.querySelector(".num").value = ''

  
});
