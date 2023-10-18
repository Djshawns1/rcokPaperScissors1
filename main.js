const CHOICES = ["rock", "paper", "scissors"];
const ROUNDS = 5;
//computer choose rock, paper or scissors based on the random choosing of 1, 2, or 3
function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * 3)];
}
//human player click an img of a child holding rock, paper or scissors
let humanChoiceRock = document.querySelector(".rockImg");
humanChoiceRock.addEventListener("click", humanPlayer)
let humanChoicePaper = document.querySelector(".paperImg");
humanChoicePaper.addEventListener("click", humanPlayer)
let humanChoiceScissors = document.querySelector(".scissorsImg");
humanChoiceScissors.addEventListener("click", humanPlayer)

// event listener
function humanPlayer() {
    if (humanChoicePaper){
        return humanChoicePaper;
    }
    else if (humanChoiceRock){
        return humanChoiceRock;
    }
    else return humanChoiceScissors
}
//check if user inputs a valid text input
//may need deletion later
function isValidChoice(choice) {
    return CHOICES.includes(choice);
}
//player vs computer winner is decided and text appears in the console
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

// function playRound() {
//     let humanWin = 0;
//     let computerWin = 0;

//     for (let i = 0; i < ROUNDS; i++) {
//         let computerSelection = getComputerChoice();
//         let humanSelection = humanPlayer();

//         if (!humanSelection) {
//             console.log("Game cancelled");
//             break;
//         }

//         if (!isValidChoice(humanSelection)) {
//             console.log("Invalid choice");
//             break;
//         }

//         console.log("Computer chose:", computerSelection);
//         console.log("Player chose:", humanSelection);

//         let result = determineWinner(computerSelection, humanSelection);
//         console.log(result);

//         if (result === "Player Wins") humanWin++;
//         else if (result === "Computer Wins") computerWin++;
//     }

//     if (humanWin > computerWin) return "Player is the overall winner!";
//     else if (humanWin < computerWin) return "Computer is the overall winner!";
//     else return "It's a tie overall!";
// }

// // Example call
// console.log(playRound());


//next add text or prompt for who won and how many rouncs
