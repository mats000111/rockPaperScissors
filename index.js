function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getPlayerSelection(roundNumber) {
    const selection = prompt("Round " + roundNumber +
        " - Please enter your selection - Rock, paper or scissors");

    // If selection isn't null convert to lower case
    return selection ? selection.toLowerCase().trim() : selection;
}

function getComputerSelection() {
    const randomNumber = getRandomNumber(1, 3);

    if(randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }    
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === null) {
        alert("Refresh to play again");
        return "cancelled";
    }
    else if(playerChoice === computerChoice) {
        alert("Draw! make another selection - Rock, paper or scissors");
        return "draw";       
    } else if (playerChoice === "rock") {
        if(computerChoice === "paper") {
            alert("You lost the round! Rock loses to paper");
            return "lost";
        } else if (computerChoice === "scissors") {
            alert ("You won the round! Rock beats scissors");
            return "won";
        }
    } else if (playerChoice === "paper") {
        if(computerChoice === "scissors") {
            alert ("You lost the round! Paper loses to scissors");
            return "lost";
        } else if (computerChoice === "rock") {
            alert ("You won the round! Paper beats rock");
            return "won";
        }
    } else if (playerChoice === "scissors") {
        if(computerChoice === "rock") {
            alert ("You lost the round! Scissors loses to rock");
            return "lost";
        } else if (computerChoice === "paper") {
            alert ("You won the round! Scissors beats paper");
            return "won";
        }
    } else {
        alert("Please enter a valid selection - Rock, paper or scissors");
        return "invalid";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 1; i <= 5; i++) {
        let result = playRound(getPlayerSelection(i), getComputerSelection());        

        while(result === "draw" || result === "invalid") {
            result = playRound(getPlayerSelection(i), getComputerSelection());
        }

        if(result === "cancelled") {
            return;
        } else if (result === "won") {
            playerScore ++;
        } else {
            computerScore++;
        }

        alert("Current score - You (" + playerScore + ") | Computer (" + computerScore + ")" )
    } 
    
    if(playerScore > computerScore) {
        alert("Congrats! You won!");
    } else {
        alert("You lost. Better luck next time.")
    }
    
    alert("Refresh to play again");    
}

(game());