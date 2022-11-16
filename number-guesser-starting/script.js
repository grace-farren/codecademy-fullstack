let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
let winner; 


// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10)
};

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
  let humanGuessDifference = Math.abs(secretTarget - humanGuess);
  let computerGuessDifference = Math.abs(secretTarget - computerGuess);

  if (humanGuess === computerGuess) {
    winner = humanGuess
  } else if (humanGuessDifference > computerGuessDifference) {
    winner = computerGuess
  } else if (humanGuessDifference < computerGuessDifference) {
    winner = humanGuess
  }

  if (winner === humanGuess) {
    return true;
  } else if( winner === computerGuess) {
    return false
  }
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};