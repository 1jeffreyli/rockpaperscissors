console.log("Hello World!");
// a function called computerPlay that will randomly return rock(r), paper(p), or scissors(s).
let moves = ["Rock", "Paper", "Scissors"];

function computerPlay(){
    let computerNumber = Math.floor(Math.random() * 3);
    return moves[computerNumber];
}