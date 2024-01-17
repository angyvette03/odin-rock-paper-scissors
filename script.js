
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

// function endGame(playerScore, computerScore){
//     if(playerScore > computerScore){
//         console.log('You win!');
//         const endResult = document.createElement("div");
//         endResult.textContent = "you win!";
//     }
//     else if(playerScore < computerScore){
//         console.log('You lose!');
//         const endResult = document.createElement("div");
//         endResult.textContent = "you lose!";
//     }
//     else{
//         console.log('Tie!');
//         const endResult = document.createElement("div");
//         endResult.textContent = "you tie!";
//     }
//     document.body.appendChild(endResult);
// }

let playerScore = 0;
let computerScore = 0;
let draw = 0;
let i = 0;

const buttonContainer = document.querySelector(".button-container");
const container = document.querySelector(".container");

const rock = document.createElement("button");
rock.textContent = 'rock';
rock.style.backgroundColor = 'gray';
rock.style.color = 'white';
buttonContainer.appendChild(rock);

const scissors = document.createElement("button");
scissors.textContent = 'scissors';
scissors.style.backgroundColor = 'navy';
scissors.style.color = 'white';
buttonContainer.appendChild(scissors);

const paper = document.createElement("button");
paper.textContent = 'paper'; 
paper.style.backgroundColor = 'white';
paper.style.color = 'black';
buttonContainer.appendChild(paper);

rock.addEventListener('click', () => handleButtonClick('rock'));
scissors.addEventListener('click', () => handleButtonClick('scissors'));
paper.addEventListener('click', () => handleButtonClick('paper'));

console.log('Welcome to Rock, Paper, Scissors! Let us play 5 games!');

const leaderboard = document.createElement('table');
const headerRow = leaderboard.createTHead().insertRow(0);
const headers = ['Game No', 'Player Score', 'Computer Score', 'Tie'];
headers.forEach((headerText, index) => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
});
container.appendChild(leaderboard);
// document.body.appendChild(buttonContainer);
// document.body.appendChild(container);


function handleButtonClick(playerSelection) {
    console.log('Round ' + (i + 1));

    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);

    if (result.includes('win')) {
        playerScore++;
    } else if (result.includes('lose')) {
        computerScore++;
    } else {
        draw++;
    }
    const row = leaderboard.insertRow(-1);
    const gameNo = row.insertCell(0);
    const pScore = row.insertCell(1);
    const cScore = row.insertCell(2);
    const tie = row.insertCell(3);
    gameNo.textContent = i+1;
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
    tie.textContent = draw;

    i++;
    const endResult = document.querySelector(".result");

    if (playerScore === 5 || computerScore === 5) {
        // const endResult = document.createElement("div");
        // endGame(playerScore, computerScore);
        if(playerScore > computerScore){
            endResult.textContent = "You Won! " + "Computer Score: " + computerScore + '\n' + 'Your Score: ' + playerScore;
        }
        else if(playerScore < computerScore){
            endResult.textContent = "You LOST! " + "Computer Score: " + computerScore + '\n' + 'Your Score: ' + playerScore;
        }
        else{
            endResult.textContent = ("you tie!" + "Computer Score = Your Score: " + computerScore);
        }
        // document.body.appendChild(endResult);
        while (leaderboard.rows.length > 1) {
            leaderboard.deleteRow(1);
        }
        playerScore = 0;
        computerScore = 0;
        draw = 0;
        i = 0;
        // endResult.textContent = '';
    }
}
