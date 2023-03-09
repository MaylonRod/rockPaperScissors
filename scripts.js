function getComputerChoice(min, max) {
    randomCalc = Math.floor(Math.random() * (max - min + 1) + min);

    if (randomCalc === 1){
        return 'rock';
    }
    else if (randomCalc === 2) {
        return 'paper';
        }
    
    else {
        return 'scissors';
        }
}
let userScore = 0,
    computerScore = 0,
    winner;

function playRound(){
    computerSelection = getComputerChoice(1,3)
    playerSelection = prompt("Rock, Paper, Scissors?");
    playerSelection = playerSelection.toLowerCase();


    if (playerSelection === computerSelection){
        console.log("You draw!");
        }
    else if (playerSelection === 'rock'){
            if(computerSelection === 'paper'){
                computerScore += 1;
                console.log("You lose! Paper beats Rock!");
            }
            else {
                userScore += 1;
                console.log("You win! Rock beats Scissors!");
            }
    }
    else if (playerSelection === 'paper'){
        if (computerSelection === 'rock'){
            userScore += 1;
            console.log("You win! Paper beats Rock!");
        }
        else {
            computerScore += 1;
            console.log("You lose! Scissors beat Paper!");
        }
    }

    else if (playerSelection === 'scissors'){
        if (computerSelection === 'paper'){
            userScore += 1;
            console.log("You win! Scissors beat Paper!");
        }
        else {
            computerScore += 1;
            console.log("You lose! Rock beats Scissors!");
        }
    }

    else {
        console.log("Wrong input");
    }
}

 function game(){
    for (let i = 0; i < 5; i++) {
        playRound(); 
        console.log('Your score: ' + userScore);
        console.log("Opponent's score: " + computerScore);
     }
     if (userScore > computerScore){
        console.log("You win the game with a score of " + userScore + "-" + computerScore)
     } else if(computerScore > userScore){
        console.log("You lose the game with a score of " + computerScore + "-" + userScore)
     }

     else {
        console.log("It's a draw!")
     }
    

}

game();