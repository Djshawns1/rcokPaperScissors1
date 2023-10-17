const CHOICES = ["rock", "paper", "scissors"];
const ROUNDS = 5;

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * 3)];
}

function humanPlayer() {
    let hand = prompt("Enter rock, paper, or scissors");
    return hand ? hand.toLowerCase() : null;
}

function isValidChoice(choice) {
    return CHOICES.includes(choice);
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

function playRound() {
    let humanWin = 0;
    let computerWin = 0;

    for (let i = 0; i < ROUNDS; i++) {
        let computerSelection = getComputerChoice();
        let humanSelection = humanPlayer();

        if (!humanSelection) {
            console.log("Game cancelled");
            break;
        }

        if (!isValidChoice(humanSelection)) {
            console.log("Invalid choice");
            break;
        }

        console.log("Computer chose:", computerSelection);
        console.log("Player chose:", humanSelection);

        let result = determineWinner(computerSelection, humanSelection);
        console.log(result);

        if (result === "Player Wins") humanWin++;
        else if (result === "Computer Wins") computerWin++;
    }

    if (humanWin > computerWin) return "Player is the overall winner!";
    else if (humanWin < computerWin) return "Computer is the overall winner!";
    else return "It's a tie overall!";
}

// Example call
console.log(playRound());
