function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function humanPlayer(){
    let hand = prompt("Enter rock, paper, or scissors");
    return hand ? hand.toLowerCase() : null;
}

function determineWinner(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) return "It's a tie";

    if (
        (computerChoice === "rock" && playerChoice === "scissors") ||
        (computerChoice === "paper" && playerChoice === "rock") ||
        (computerChoice === "scissors" && playerChoice === "paper")
    ) {
        return "Computer Wins";
    }

    return "Player Wins";
}

function computerRound(){
    let computerChoice1 = getComputerChoice();
    let computerChoice2 = getComputerChoice();
    console.log("Computer 1:", computerChoice1);
    console.log("Computer 2:", computerChoice2);
    return determineWinner(computerChoice1, computerChoice2);
}

function playRound(){

    let rounds = 5;
for(let i = 0; i < rounds; i++){
    let computerSelection = getComputerChoice();
    let humanSelection = humanPlayer();
    if (!humanSelection) return "Game cancelled";

    if (!["rock", "paper", "scissors"].includes(humanSelection)) {
        return "Invalid choice";
    }

    console.log("Computer chose:", computerSelection);
    console.log("Player chose:", humanSelection);

    return determineWinner(computerSelection, humanSelection);
}
}
// Example call
console.log(playRound());
