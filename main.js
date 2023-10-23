const CHOICES = ["rock", "paper", "scissors"];
const ROUNDS = 5;

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * 3)];
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', handlePlayerChoice);
});

function handlePlayerChoice(event) {
    const playerChoice = event.target.id;
    const computerChoice = getComputerChoice();
    console.log(determineWinner(computerChoice, playerChoice));
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
        // let humanSelection = handlePlayerChoice(); // This line needs modification as handlePlayerChoice now relies on an event.

        // ... rest of your code
    }

    // ... rest of your code
}

// Example call
// console.log(playRound());  // This line needs modification as playRound now relies on handlePlayerChoice.
