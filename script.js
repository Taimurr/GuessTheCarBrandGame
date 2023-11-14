/* Course: SENG 513
Assignment 3
Name: Muhammad Taimur Rizwan
UCID: 30078941
*/

// Array of car brand words for the game
const words = ['audi', 'bmw', 'mercedes', 'toyota', 'lexus', 'lamborghini', 'ferrari', 'honda', 'kia', 'dodge', 'ford', 'gmc', 'mitsubishi', 'subaru', 'porsche', 'hyundai', 'mclaren', 'skoda', 'volkswagen', 'suzuki', 'acura', 'infiniti', 'maserati'];

// Variables to track game state and player scores
let wordChosen;
let wordDisplayArray = [];
let wrongGuesses = 0;
let currentPlayer = 1;
let player1Guesses = [];
let player2Guesses = [];
let player1Score = 0;
let player2Score = 0;

// Event listener for when the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    start();
});

// Function to initialize the game state
function start() {
    currentPlayer = 1;
    document.getElementById("current-player").textContent = currentPlayer;
    wordChosen = words[Math.floor(Math.random() * words.length)];
    wordDisplayArray = Array(wordChosen.length).fill('_');
    wrongGuesses = 0;
    player1Guesses = [];
    player2Guesses = [];

    updateTheWordDisplayed();
    updateHGFigure();
    updateTheIncorrectGuessMade();
    updatePlayerGuesses();
}

// Function to handle the submission of a letter guess
function submit() {
    const letterGuess = document.getElementById("letter-input").value.toLowerCase();

    // Validate the input
    if (!letterGuess.match(/^[a-z]$/) || letterGuess.length !== 1) {
        alert("Please enter a valid single letter.");
        return;
    }

    // Update player guesses based on the current player
    if (currentPlayer === 1) {
        player1Guesses.push(letterGuess);
    } else if (currentPlayer === 2) {
        player2Guesses.push(letterGuess);
    }

    // Check if the guessed letter is in the word
    if (wordChosen.includes(letterGuess)) {
        // Update the word display array with the correct guesses
        for (let i = 0; i < wordChosen.length; i++) {
            if (wordChosen[i] === letterGuess) {
                wordDisplayArray[i] = letterGuess;
            }
        }
        updateTheWordDisplayed();

        // Check if the word is completely guessed
        if (!wordDisplayArray.includes('_')) {
            alert(`Player ${currentPlayer} guessed the Brand!: ${wordChosen}`);
            updateScore(currentPlayer);
            start();
        }
    } else {
        // Increment wrong guesses and check for game loss
        wrongGuesses++;
        updateHGFigure();
        updateTheIncorrectGuessMade();

        if (wrongGuesses === 6) {
            alert(`Player ${currentPlayer} lost! The car brand was: ${wordChosen}`);
            start();
        }
    }

    // Reset the letter input field
    document.getElementById("letter-input").value = '';

    // Check for game win and switch to the next player
    if (!wordDisplayArray.includes('_')) {
        alert(`Player ${currentPlayer} wins! They completed the Brand!: ${wordChosen}`);
        updateScore(currentPlayer);
        start();
    } else {
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        document.getElementById("current-player").textContent = currentPlayer;
        updatePlayerGuesses();
    }
}

// Function to update the displayed word with correct guesses
function updateTheWordDisplayed() {
    document.getElementById("word-display").innerText = wordDisplayArray.join(' ');
}

// Function to update the hangman figure (comment placeholder)
function updateHGFigure() {
    // hangman figure lines (to be implemented)
}

// Function to update the displayed count of incorrect guesses
function updateTheIncorrectGuessMade() {
    document.getElementById("incorrect-guesses").innerText = wrongGuesses;
}

// Function to update the displayed player guesses
function updatePlayerGuesses() {
    document.getElementById("player1-guesses").innerText = player1Guesses.join(', ');
    document.getElementById("player2-guesses").innerText = player2Guesses.join(', ');
}

// Function to update the score for the given player
function updateScore(player) {
    if (player === 1) {
        player1Score++;
        document.getElementById("player1-score").textContent = player1Score;
    } else if (player === 2) {
        player2Score++;
        document.getElementById("player2-score").textContent = player2Score;
    }
}
