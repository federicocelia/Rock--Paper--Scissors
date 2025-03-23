// This is a simple implementation of the classic "Rock, Paper, Scissors" game in JavaScript.
// The game allows a user to input their choice (rock, paper, or scissors), and the computer randomly selects its choice.
// The winner is determined based on the rules of the game:
// - Rock beats Scissors
// - Scissors beats Paper
// - Paper beats Rock
// If both the user and the computer choose the same, it's a tie.
// Additionally, there's a "cheat code" where the user can input "bomb" to automatically win the game.

// Display a message to start the game
console.log('Let\'s play a game! Rock ? Paper ? or Scissors?');

// Function to get the user's choice
function getUserChoice(userInput) {
    userInput = userInput.toLowerCase(); // Convert input to lowercase for consistency
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput; // Return valid choices
    } else if (userInput === 'bomb') {
        return userInput; // Special cheat code
    } else {
        // Handle invalid input
        return console.log(`Wrong value, You need to choose; rock, paper or scissors! ${userInput} is not one of those`);
    }
}

// Function to get the computer's choice
function getComputerChoice() {
    // Generate a random number between 0 and 2
    computerInput = Math.floor(Math.random() * 3);
    // Map the random number to rock, paper, or scissors
    if (computerInput === 0) {
        return 'rock';
    } else if (computerInput === 1) {
        return 'paper';
    } else if (computerInput === 2) {
        return 'scissors';
    } else {
        // Handle unexpected errors
        return console.log('There is a mistake in the computer input code');
    }
}

// Function to determine the winner of the game
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        // If both choices are the same, it's a tie
        return `This turn is a tie Game! You choose ${userChoice} and the computer choose ${computerChoice}`;
    } else if (userChoice === 'rock') {
        // Rock beats Scissors, but loses to Paper
        if (computerChoice === 'paper') {
            return `The computer Won, You choose ${userChoice} and the computer choose ${computerChoice}`;
        } else if (computerChoice === 'scissors') {
            return `You Won!, You choose ${userChoice} and the computer choose ${computerChoice}`;
        }
    } else if (userChoice === 'paper') {
        // Paper beats Rock, but loses to Scissors
        if (computerChoice === 'scissors') {
            return `The computer Won, You choose ${userChoice} and the computer choose ${computerChoice}`;
        } else if (computerChoice === 'rock') {
            return `You Won!, You choose ${userChoice} and the computer choose ${computerChoice}`;
        }
    } else if (userChoice === 'scissors') {
        // Scissors beats Paper, but loses to Rock
        if (computerChoice === 'rock') {
            return `The computer Won, You choose ${userChoice} and the computer choose ${computerChoice}`;
        } else if (computerChoice === 'paper') {
            return `You Won!, You choose ${userChoice} and the computer choose ${computerChoice}`;
        }
    }
}

// Function to play the game
function playGame(userInput) {
    let userChoice = getUserChoice(userInput); // Get the user's choice
    let computerChoice = getComputerChoice(); // Get the computer's choice
    if (userChoice === 'bomb') {
        // Handle the cheat code
        console.log(`You enter the Bomb! You Won! you Cheater!`);
    } else if (userChoice === undefined) {
        // Handle invalid input
        console.log('Try with a different value!');
    } else {
        // Determine and display the winner
        console.log(determineWinner(userChoice, computerChoice));
    }
}

// Start the game with the user's choice
playGame('rock');