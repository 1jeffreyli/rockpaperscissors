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
        computerWins++;
        return "You Lose! Paper beats Rock.";
    } else if (playerMove === "rock" && computerMove === "scissors") {
        playerWins++;
        return "You Win! Rock beats Paper.";
    } else if (playerMove === "paper" && computerMove === "rock") {
        playerWins++;
        return "You Win! Paper beats Rock.";
    } else if (playerMove === "paper" && computerMove === "scissors") {
        computerWins++;
        return "You Lose! Scissors beats Paper.";
    } else if (playerMove === "scissors" && computerMove === "rock") {
        computerWins++;
        return "You Lose! Rock beats Scissors";
    } else if (playerMove === "scissors" && computerMove === "paper") {
        playerWins++;
        return "You Win! Scissors beats Paper.";
    } else {
        return "It's a tie. Play again.";
    }
}

// this calls the function computerPlay() and sets it to the constant computerSelection,
//  thus actually making the computer play after defining the variables earlier
const computerSelection = computerPlay();

const results = document.querySelector(".results");
const score = document.querySelector(".score");


// Adds an event listener to each RPS button
const rock = document.querySelector(".rock");
rock.addEventListener("click", () => {
    // console.log(play("rock", computerPlay()));
    const rockResult = document.createElement("p");
    rockResult.textContent = `${play("rock", computerPlay())}`;
    rockResult.classList.add("font18");
    results.appendChild(rockResult);
    const playerWinCount = document.createElement("p");
    playerWinCount.textContent = `Player Wins: ${playerWins}`;
    score.appendChild(playerWinCount);
    const computerWinCount = document.createElement("p");
    computerWinCount.textContent = `Computer Wins: ${computerWins}`;
    score.appendChild(computerWinCount);
}
);

const paper = document.querySelector(".paper");
paper.addEventListener("click", () => {
    // console.log(play("paper", computerPlay()));
    const paperResult = document.createElement("p");
    paperResult.textContent = `${play("paper", computerPlay())}`;
    paperResult.classList.add("font18");
    results.appendChild(paperResult);
    const playerWinCount = document.createElement("p");
    playerWinCount.textContent = `Player Wins: ${playerWins}`;
    score.appendChild(playerWinCount);
    const computerWinCount = document.createElement("p");
    computerWinCount.textContent = `Computer Wins: ${computerWins}`;
    score.appendChild(computerWinCount);
}
);

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => {
    // console.log(play("scissors", computerPlay()));
    const scissorsResult = document.createElement("p");
    scissorsResult.textContent = `${play("scissors", computerPlay())}`;
    scissorsResult.classList.add("font18");
    results.appendChild(scissorsResult);
    const playerWinCount = document.createElement("p");
    playerWinCount.textContent = `Player Wins: ${playerWins}`;
    score.appendChild(playerWinCount);
    const computerWinCount = document.createElement("p");
    computerWinCount.textContent = `Computer Wins: ${computerWins}`;
    score.appendChild(computerWinCount);
}
);

// Display the running score and announce a winner of the game once one player reaches 5 points
// const playerWinCount = document.createElement("p");
// playerWinCount.textContent = `Player Wins: ${playerWins}`;
// score.appendChild(playerWinCount);

// const computerWinCount = document.createElement("p");
// computerWinCount.textContent = `Computer Wins: ${computerWins}`;
// score.appendChild(computerWinCount);


// function game() that plays rps 5 times and declares a winner at the end
// function game(){
//     for (let i=0; i < 5; i++) {
//         let playerSelection = prompt("Rock, Paper, or Scissors?", "");
//         console.log(play(playerSelection, computerSelection));
//     }

//     // if...else statement to compare player and computer wins to decide who is the final winner,
//     //  after for loop executes
//     if(playerWins > computerWins){
//         console.log(`You won! You won ${playerWins} times.`);
//     } else if(playerWins < computerWins){
//         console.log(`You lost! The computer won ${computerWins} times.`);
//     } else{
//         console.log(`Somehow you tied. You won ${playerWins} times and the computer won ${computerWins} times.`);
//     }
// }

// call the game() function to play rps
// game();