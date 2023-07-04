function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 + 1);
    
    if (choice === 1) {
        return "rock"
    } else if (choice === 2) {
        return "paper"
    } else {
        return "scissors"
    }
};

function playRound() {
    playerSelection = prompt("Choose your weapon: ")
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice()

    if (playerSelection === "rock" & computerSelection === "rock") {
        console.log("tie");
        return 0
    } else if (playerSelection === "rock" & computerSelection === "paper") {
        console.log("computer wins");
        return -1
    } else if (playerSelection === "rock" & computerSelection === "scissors") {
        console.log("player wins");
        return 1
    } else if (playerSelection === "paper" & computerSelection === "rock") {
        return "player wins"
    } else if (playerSelection === "paper" & computerSelection === "paper") {
        console.log("tie");
        return 0
    } else if (playerSelection === "paper" & computerSelection === "scissors") {
        console.log("computer wins");
        return -1
    } else if (playerSelection === "scissors" & computerSelection === "rock") {
        console.log("computer wins");
        return -1
    } else if (playerSelection === "scissors" & computerSelection === "paper") {
        console.log("player wins");
        return 1
    } else if (playerSelection === "scissors" & computerSelection === "scissors") {
        console.log("tie");
        return "tie"
    }
}

function game() {
    score = 0;

    for(i = 0; i < 5; i++) {
        score = score + playRound();
        console.log(score);
    }

    if (score < 0) {
        console.log("The computer has destroyed you");
    } else if (score > 0) {
        console.log("You have destroyed the computer");
    } else {
        console.log("You have tied");
    }
}

game();