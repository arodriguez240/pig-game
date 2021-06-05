'use strict';
// Selecting Html Elements
let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');
let dice = document.querySelector('.dice');
let btnNew = document.querySelector('.btn--new');
let btnHold = document.querySelector('.btn--hold');
let btnRoll = document.querySelector('.btn--roll');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let current0 = document.querySelector('#current--0');
let current1 = document.querySelector('#current--1');


//Starting conditions 
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

let scores = [0,0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// Switch player
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}
// Rolling dice Func
btnRoll.addEventListener('click', () => {
  if(playing) {
    const die = Math.trunc(Math.random() * 6 ) + 1;

    dice.classList.remove('hidden');
    dice.src = `./images/dice-${die}.png`;

    if(die !== 1) {
      currentScore += die;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;    
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if(playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
  
    if(scores[activePlayer] >= 100) {
      playing = false;
      dice.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }
    else {
    // switch Player
    switchPlayer();
    }
  }
})
