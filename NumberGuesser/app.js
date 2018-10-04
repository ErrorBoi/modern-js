/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = getWinningNum(min, max),
    guessesLeft = 3;


// UI elements
const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.getElementById('guess-btn'),
      guessInput = document.getElementById('guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e) {
  if(e.target.className === 'play-again')
    window.location.reload();
})
// Listen for guess
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);
  // Validate
  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  } else {
    // Check if won
    if(guess === winningNum) {
      // Game over - won
      gameOver(true, `${winningNum} is correct, grats!`);
    } else {
      // Wrong number
      guessesLeft--;
      if(guessesLeft === 0) {
        // Game over - lost
        gameOver(false, `You lost :( Correct number was ${winningNum}`);
      } else {
        // Game continues - answer wrong

        // Change border color
        guessInput.style.borderColor = 'red';

        // Tell user its the wrong number
        setMessage(`${guess} is not correct, ${guessesLeft} guesses left.`, 'blue');
      }
    }
  } 
});

// Game over
function gameOver(won, msg) {
  let color = won ? 'green' : 'red';
  // Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // Set victory message
  setMessage(msg, color);

  // Play again?
  guessBtn.value = 'Play again?';
  guessBtn.className += 'play-again';
}

// Get winning number
function getWinningNum(min, max) {
  return min + Math.round(Math.random() * (max - min));
}

// Set message
function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}
