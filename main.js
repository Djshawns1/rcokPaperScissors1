// define computer and player 

let playerSelection ="";
let computerSelection ="";


// create a function that accepts a string (rock, paper, or scissors)
// if rock is chosen it should lose to paper and win versus
// if scissors is chosen it should lose to rock and win versus paper
// if paper is chosen it should lose to rock and win versus scissors
//the function should accept players and computers input then 



//rock paper scissors game
//the game has three variables
//each variable can only defeat 1 other
//then loses to the other variables

// first write a function that accepts a string from the user
// the function accepts the string
//the function turn the string to lowercase
//the retrurns the string



function humanPlayer (){
    let hand = prompt("Enter rock, paper, or scissors")
    if (hand === null){
        return "cancel";
     } else {
         return hand;
            }
        }
    
    

//second function is the computer choose rock paper or scissors
//the 
function getComputerChoice (min, max){
 let number = Math.floor(Math.random() * (max - min + 1)) + min;
//rock =< 3 which is 3,2,1
//paper =>4 && => 6 which is 4, 5, 6
//scissors =>7
    if (number >= 0 && number < 1){
        return "paper"
    }
    else if (number >= 1 && number < 2){
        return "rock"
    }
    else {
        return "scissors"
    }
}

//third have the computer play against itself
//how?

function computerRound (computerChoice, playerChoice){
    computerChoice = getComputerChoice(0, 2)
    playerChoice = getComputerChoice(0, 2)
    console.log(computerChoice)
    console.log(playerChoice)
//let choiceArray = []
//choiceArray.push(computerChoice, playerChoice)
//console.log (choiceArray)
let rock = "rock";
let paper = "paper";
let scissors = "scissors";
if(computerChoice === rock && playerChoice === scissors){
    return ("Computer Rock Wins")
}

else if (computerChoice === paper && playerChoice === rock){
    return "Computer Paper wins"
}

else if(playerChoice === paper && computerChoice === scissors){
    return "Computer scissors wins"
}
else if(computerChoice === paper && playerChoice === scissors){
    return "Player scissors wins"
}

else if (playerChoice === paper && computerChoice === rock){
    return "Player Paper wins"
}
else if(playerChoice === rock && computerChoice === scissors){
    return ("Player Rock Wins")
}
else{
    return "It's a tie"
}

}
// console.log (computerRound())
// console.log (computerRound())
// console.log (computerRound())
// console.log (computerRound())
// console.log (computerRound())
// console.log (computerRound())
// console.log (computerRound())
// console.log (computerRound())
//maybe copy the "getComputerChoice" function and have it to choose two numbers instead of one

// console.log (getComputerChoice (1,9))
// console.log (getComputerChoice (1,9))
// console.log (getComputerChoice (1,9))
// console.log (getComputerChoice (1,9))
// console.log (getComputerChoice (1,9))
// console.log (getComputerChoice (1,9))
// console.log (getComputerChoice (1,9))
// console.log (getComputerChoice (1,9))

//play a round with the computer
//take computerSelection into a function as an arguement as well as a prompt
//copy the if else statement from computer round
//return who wins computer or human

function playRound (){
    let computerSelection = getComputerChoice(0,5)
    let humanSelection = humanPlayer()
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
let count = 0
let i = 1
while (i <= 5){
    count += i;
    i++
    if(computerSelection === rock && humanSelection === scissors){
        return ("Computer Rock Wins")
    }
    else if(computerSelection === paper && humanSelection === scissors){
        return "Computer scissors wins"
    }
    else if (computerSelection === paper && humanSelection === rock){
        return "Computer Paper wins"
    }
    else if(humanSelection === rock && computerSelection === scissors){
        return ("Player Rock Wins")
    }
    else if(humanSelection === paper && computerSelection === scissors){
        return "Player scissors wins"
    }
    else if (humanSelection === paper && computerSelection === rock){
        return "Player Paper wins"
    }
    else{
        return "It's a tie"
    }
}
}
playRound()
    
