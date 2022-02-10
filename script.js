console.log("Hello World!");
let moves = ["Rock", "Paper", "Scissors"];

// define win count variables globally
let playerWins = 0;
let computerWins = 0;

// a function called computerPlay that will randomly return rock(r), paper(p), or scissors(s).
function computerPlay(){
    let computerNumber = Math.floor(Math.random() * 3);
    return moves[computerNumber];
}

function play(playerSelection, computerSelection){
    // set string toLowerCase so capitalization on input doesn't matter
    let playerMove = playerSelection.toLowerCase();
    let computerMove = computerSelection.toLowerCase();



    // if...else if...else statements for all game outcomes
    if (playerMove === "rock" && computerMove === "paper") {
        return "You Lose! Paper beats Rock.";
        computerWins++;
    } else if (playerMove === "rock" && computerMove === "scissors") {
        return "You Win! Rock beats Paper.";
        playerWins++;
    } else if (playerMove === "paper" && computerMove === "rock") {
        return "You Win! Paper beats Rock.";
        playerWins++;
    } else if (playerMove === "paper" && computerMove === "scissors") {
        return "You Lose! Scissors beats Paper.";
        computerWins++;
    } else if (playerMove === "scissors" && computerMove === "rock") {
        return "You Lose! Rock beats Scissors";
        computerWins++;
    } else if (playerMove === "scissors" && computerMove === "paper") {
        return "You Win! Scissors beats Paper.";
        playerWins++;
    } else {
        return "It's a tie. Play again.";
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(play(playerSelection, computerSelection));

function game(){
    // for loop that plays 5 rounds of rps
    for (let i=0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?", "");
        console.log(play(playerSelection, computerSelection));
    }

    // if...else statement to compare player and computer wins to decide who is the final winner, after for loop executes
    if(playerWins > computerWins){
        console.log(`You won! You won ${playerWins} times.`);
    } else if(playerWins < computerWins){
        console.log(`You lost! The computer won ${computerWins} times.`);
    } else{
        console.log(`Somehow you tied. You won ${playerWins} times and the computer won ${computerWins} times.`);
    }
}

game();