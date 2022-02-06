console.log("Hello World!");
// a function called computerPlay that will randomly return rock(r), paper(p), or scissors(s).
let moves = ["Rock", "Paper", "Scissors"];

function computerPlay(){
    let computerNumber = Math.floor(Math.random() * 3);
    return moves[computerNumber];
}

function play(playerSelection, computerSelection){
    let playerMove = playerSelection.toLowerCase();
    let computerMove = computerSelection.toLowerCase();
    if (playerMove === "rock" && computerMove === "paper") {
        return "You Lose! Paper beats Rock.";
    } else if (playerMove === "rock" && computerMove === "scissors") {
        return "You Win! Rock beats Paper.";
    } else if (playerMove === "paper" && computerMove === "rock") {
        return "You Win! Paper beats Rock.";
    } else if (playerMove === "paper" && computerMove === "scissors") {
        return "You Lose! Scissors beats Paper.";
    } else if (playerMove === "scissors" && computerMove === "rock") {
        return "You Lose! Rock beats Scissors";
    } else if (playerMove === "scissors" && computerMove === "paper") {
        return "You Win! Scissors beats Paper.";
    } else {
        return "It's a tie. Play again.";
    }
}