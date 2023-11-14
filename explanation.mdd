Complex part #1: JavaScript Code Logic
function submit() {
    // ... (omitted code)
    if (!wordDisplayArray.includes('_')) {
        alert(`Player ${currentPlayer} wins!: ${wordChosen}`);
        updateScore(currentPlayer);
        start();
    } else {
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        document.getElementById("current-player").textContent = currentPlayer;
        updatePlayerGuesses();
    }
}
The submit function manages player turns, checks for a win, and updates game state. It's concise but handles complex game flow, win conditions, and player switching.

Complex part #2: updateTheWordDisplayed() function
function updateTheWordDisplayed() {
    document.getElementById("word-display").innerText = wordDisplayArray.join(' ');
}
This function updates the displayed word dynamically based on correct guesses, utilizing the join method for string formation.



