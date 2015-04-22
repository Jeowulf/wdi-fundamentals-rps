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

function getPlayerMove(move) {
    move = move || getInput(); 
    return move;
    }

function getComputerMove(move) {
    move = move || randomPlay();
    return move;
    }

function getWinner(playerMove,computerMove) {
    var winner;
    console.log(computerMove);
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
       console.log("You took that durn robot DOWN.");
       return winner;
} else if (playerMove === 'paper' && computerMove === 'scissors') {
       winner = 'computer';
       console.log("Well dangit.");
       return winner;
} else if (computerMove === 'paper' && playerMove === 'scissors') {
       winner = 'player';
       console.log("HAHAHA.  Rock paper scissors is no place for mercy.");
       return winner;
} else if (playerMove === 'scissors' && computerMove === 'rock') {
       winner = 'computer';
       console.log("The machines are taking over.  Fight harder or it's judgement day.");
       return winner;
} else if (playerMove === 'rock' && computerMove === 'scissors') {
       winner = 'player';
       console.log("Send the computer home crying!");
       return winner;
       } else {
       console.log("Invalid move selection.  Did you use all lowercase? (Type only letters)");
       } 
}
       
function corePlayToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
                var playerMove = getPlayerMove();
                var computerMove = getComputerMove();
                var winner = getWinner(playerMove, computerMove);
                if (winner === 'player') {
                console.log("Your " + playerMove + " destroyed Computer's " + computerMove + "!");
                playerWins += 1;
                console.log("PLAYER   WINS: " + playerWins);
                console.log("COMPUTER WINS: " + computerWins);
            }   else if (winner === 'computer') {
                console.log("Computer's " + computerMove + " beat your " + playerMove + ".");
                computerWins += 1;
                console.log("PLAYER   WINS: " + playerWins);
                console.log("COMPUTER WINS: " + computerWins);
                } else { console.log("Play Again");
            }   
        }return [playerWins, computerWins];

    } 
function playToFive() {
    var winner = corePlayToFive();
    if (winner[1] === 5) {
                console.log("                     COMPUTER WINS");
                console.log("                       GAME OVER");
                }
    if (winner[0] === 5) {
                console.log ("              YOU HAVE WON THE MATCH.");
                console.log ("visit www.belieberretriever.com to retrieve your free Justin Bieber tickets!");
    } return winner;
}
                playToFive();