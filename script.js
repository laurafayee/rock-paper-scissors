function computerPlay(){
    let items = Array('Rock', 'Paper', 'Scissors');
    let item = items[Math.floor(Math.random()*items.length)];
    return item;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    let result;

    if(playerSelection === computerSelection){
        console.log(`You tie! You both played ${computerSelection.toLowerCase()}`);
        return result = 'Tie';
    }else if((playerSelection == 'Rock' && computerSelection == 'Paper') 
            || (playerSelection == 'Paper' && computerSelection == 'Scissors')
            || (playerSelection == 'Scissors' && computerSelection == 'Rock')){
        console.log(`You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`);
        return result = 'Lose';
    }else{
        console.log(`You win! ${playerSelection} beats ${computerSelection.toLowerCase()}`);
        return result = 'Win';
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt('Enter rock, paper, or scissors:');
        const computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
        if(result=='Tie'){
            continue;
        }
        if(result=='Lose'){
            computerScore++;
        }else{
            playerScore++;
        }
        console.log(playerScore);
        console.log(computerScore);
    }
    if(playerScore>computerScore){
        console.log('You win!');
    }else if(playerScore<computerScore){
        console.log('Computer wins!');
    }else{
        console.log('You tie!');
    }
}

game();