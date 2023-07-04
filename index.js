let computerPoints = 0;
let playerPoints = 0;

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

function updateScore() {
    if (computerPoints === 5) {
        score.textContent = `Computer wins!`
    } else if (playerPoints === 5) {
        score.textContent = `Player wins!`
    } else {
        score.textContent = `Player: ${playerPoints} | Computer: ${computerPoints}`
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock" & computerSelection === "rock") {
        console.log("tie");
        return
    } else if (playerSelection === "rock" & computerSelection === "paper") {
        console.log("computer wins");
        computerPoints++
    } else if (playerSelection === "rock" & computerSelection === "scissors") {
        console.log("player wins");
        playerPoints++
    } else if (playerSelection === "paper" & computerSelection === "rock") {
        playerPoints++
    } else if (playerSelection === "paper" & computerSelection === "paper") {
        console.log("tie");
        return
    } else if (playerSelection === "paper" & computerSelection === "scissors") {
        console.log("computer wins");
        computerPoints++
    } else if (playerSelection === "scissors" & computerSelection === "rock") {
        console.log("computer wins");
        computerPoints++
    } else if (playerSelection === "scissors" & computerSelection === "paper") {
        console.log("player wins");
        playerPoints++
    } else if (playerSelection === "scissors" & computerSelection === "scissors") {
        console.log("tie");
        return
    }

    updateScore()

}

const main = document.querySelector(".main")
const score = document.createElement("p")
score.textContent = `Player: ${playerPoints} | Computer: ${computerPoints}`
main.appendChild(score)

const rockButton = document.createElement("button")
rockButton.textContent = "rock"
main.appendChild(rockButton)

const paperButton = document.createElement("button")
paperButton.textContent = "paper"
main.appendChild(paperButton)

const scissorsButton = document.createElement("button")
scissorsButton.textContent = "scissors"
main.appendChild(scissorsButton)


rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()))
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()))
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()))