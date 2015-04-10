////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    move = move || getInput(); 
    return move;
    }


function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    move = move || randomPlay();
    return move;
    }


function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) {
        winner = 'tie';
        console.log("Lame.  Freaking tie.");
    return winner;
} else if (playerMove === 'rock' && computerMove === 'paper') {
        winner = 'computer';
        console.log("Computer whooped ya. :/");
        return winner;
} else if (computerMove === 'rock' && playerMove === 'paper') {
       winner = 'player';
       console.log("You took that durn robot down");
       return winner;
} else if (playerMove === 'paper' && computerMove === 'scissors') {
        winner = 'computer';
        console.log("Well dangit.");
        return winner;
} else if (computerMove === 'paper' && playerMove === 'scissors') {
        winner = 'player';
        console.log("HAHA.  Rock paper scissors is no place for mercy.");
        return winner;
} else if (playerMove === 'scissors' && computerMove === 'rock') {
        winner = 'computer';
        console.log("The machines are taking over.  Fight harder or it's judgement day");
        return winner;
} else if (playerMove === 'rock' && computerMove === 'scissors') {
        winner = 'player';
        console.log("Send the computer home crying");
        return winner;
       } else {
        console.log("WTF is going on?!?!?")
       }

}
       

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

