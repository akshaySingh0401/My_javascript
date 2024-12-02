let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 3; 
let score = 100;

function guessTheNumber() {
    while (attempts > 0) {
       
        let userGuess = parseInt(prompt("Guess the number (between 1 and 100):"));

        
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            alert("Please enter a valid number between 1 and 100.");
            continue;
        }

        if (userGuess === randomNumber) {
            alert(`Congratulations! You guessed the number. Your score is ${score - (3 - attempts)}.`);
            return; 
        } else {
            attempts--; 
            alert(attempts > 0 
                ? `Incorrect guess. You have ${attempts} attempts left.` 
                : "Your trials are over. The correct number was " + randomNumber);
        }
    }
}


guessTheNumber();
