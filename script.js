console.log('Hello World');


function getComputerChoice(){
    let randomNo = Math.floor(Math.random()*3);
    switch(randomNo){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === computerSelection){
        return 'tie';
    }
    else if(playerSelection.toLowerCase() == 'rock'){
        if(computerSelection == 'paper'){
            return 'You lose! Paper beats Rock!';

        }
        else{
            return 'You win! Rock beats Scissors!';
        }
    }
    else if(playerSelection.toLowerCase() == 'paper'){
        if(computerSelection == 'rock'){
            return 'You win! Paper beats Rock!';
        }
        else{
            return 'You lose! Scissors beats Paper!';
        }
    }
    else{
        if(computerSelection == 'rock'){
            return 'You lose! Rock beats Scissors!';
        }
        else{
            return 'You win! Scissors beats Paper!';
        }
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let draw = 0;
    console.log('Welcome to Rock, Paper, Scissors! Let us play 5 games!');
    for(i = 0; i<5; i++){
        console.log('Round ' + (i+1));
        let playerSelection = prompt('Enter your choice: ');
        while(playerSelection.toLowerCase() != 'rock' && playerSelection.toLowerCase() != 'paper' && playerSelection.toLowerCase() != 'scissors'){
            playerSelection = prompt('Enter your choice: ');
        }
        let result= playRound(playerSelection, getComputerChoice());
        if(result.includes('win')){
            playerScore++;
        }
        else if(result.includes('lose')){
            computerScore++;
        }
        else{
            draw++;
        }
        console.log('-- Your score: ' + playerScore + ' Computer score: ' + computerScore + ' Draw: ' + draw + ' --')
    }
    if(playerScore > computerScore){
        console.log('You win!');
    }
    else if(playerScore < computerScore){
        console.log('You lose!');
    }
    else{
        console.log('Tie!');
    }
}
game();