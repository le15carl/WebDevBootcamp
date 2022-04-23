// player one button, player 2 button, and reset button
const p1Buton = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
// selecting score displayed for both players
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
// selecting the winning score
const winningScoreSelect = document.querySelector('#playto');


// variables to keep track of current score values for both players
// and the score that determines who wins
let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
// boolean to indicate whether a player has reached the winning score
let isGameOver = false;


// When a player's button is clicked, if they have not reached the 
// winning score yet, we increase their score by one
// and adjust their display score to the new value of p1Score
p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Display.textContent = p1Score;
    }
})

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Display.textContent = p2Score;
    }
})


// When the winning score is changed, the game must be reset
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})


// When the reset button is clicked, the game must be reset
resetButton.addEventListener('click', reset)


// A function to reset the scores back to 0 and changes boolean to 
// reflect the game is no longer over
function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
}