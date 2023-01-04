'use strict';
// window + . => emoji
let numberCorrect = Math.floor(Math.random() * 20) + 1;
console.log(numberCorrect);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No Number!');
  } else if (guess !== numberCorrect) {
    if (score > 1) {
      displayMessage(guess > numberCorrect ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost!');
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  } else if (guess === numberCorrect) {
    document.querySelector('.number').textContent = numberCorrect;
    displayMessage('Correct Number✔');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  numberCorrect = Math.floor(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
});
