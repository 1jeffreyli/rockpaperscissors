let moves = ["Rock", "Paper", "Scissors"];

// define win count variables globally
let playerWins = 0;
let computerWins = 0;

// a function called computerPlay that will randomly return rock(r), paper(p), or scissors(s).
function computerPlay(){
    let computerNumber = Math.floor(Math.random() * 3);
    return moves[computerNumber];
}

// custom function that groups together DOM method of adding text
function add (text) {
    const resultText = document.createElement("p");
    resultText.innerText=`${text}`;
    resultText.classList.add("font18");
    results.appendChild(resultText);
}

// rps game function
function play(playerSelection, computerPlay){
    // set string toLowerCase so capitalization on input doesn't matter
    let playerMove = playerSelection.toLowerCase();
    let computerMove = computerPlay.toLowerCase();

    // if...else if...else statements for all game outcomes
    if (playerMove === "rock" && computerMove === "paper") {
        computerWins++;
        add("You lose! Paper beats rock.");
    } else if (playerMove === "rock" && computerMove === "scissors") {
        playerWins++;
        add("You win! Rock beats paper.");
    } else if (playerMove === "paper" && computerMove === "rock") {
        playerWins++;
        add("You win! Paper beats rock.");
    } else if (playerMove === "paper" && computerMove === "scissors") {
        computerWins++;
        add("You lose! Scissors beats paper.");
    } else if (playerMove === "scissors" && computerMove === "rock") {
        computerWins++;
        add("You lose! Rock beats scissors");
    } else if (playerMove === "scissors" && computerMove === "paper") {
        playerWins++;
        add("You win! Scissors beats paper.");
    } else {
        add("It's a tie. Play again.");
    }
    // checks if a player has 5 wins
    winCondition();
}


// select the divs by class name
const results = document.querySelector(".results");
const score = document.querySelector(".score");
const counter = document.querySelector(".scoreboard");

// define a function that updates the score displayed to be called by the click event later
function updateScore() {
   counter.innerHTML = `Player Wins: ${playerWins} Computer Wins: ${computerWins}`;
   counter.parentElement.replaceChild(counter);
   counter.classList.add("font18");
}

// define rps DOM functions to be called
let playRock = function() {
    const rockResult = document.createElement("p");
    rockResult.textContent = `${play("rock", computerPlay())}`;
    updateScore();
}

let playPaper = function() {
    const paperResult = document.createElement("p");
    paperResult.textContent = `${play("paper", computerPlay())}`;
    updateScore();
}

let playScissors = function() {
    const scissorsResult = document.createElement("p");
    scissorsResult.textContent = `${play("scissors", computerPlay())}`;
    updateScore();
}

// adds an event listener to each RPS button
const rock = document.querySelector(".rock");
rock.addEventListener("click", playRock);
    
const paper = document.querySelector(".paper");
paper.addEventListener("click", playPaper);

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", playScissors);
  
function remove () {
    rock.removeEventListener("click", playRock);
    paper.removeEventListener("click", playPaper);
    scissors.removeEventListener("click", playScissors);
}

// declares first to five wins the overall winner and removes the click event listener, thus ending the game
function winCondition() {
    if (playerWins === 5) {
        const playerW = document.createElement("p");
        playerW.textContent = "Winner, winner, chicken dinner! The player has won.";
        counter.parentElement.appendChild(playerW);
        remove();
    } if (computerWins === 5) {
        const computerW = document.createElement("p");
        computerW.textContent = "Womp, womp, womp. The computer has won.";
        counter.parentElement.appendChild(computerW);
        remove();
    }
}
 

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