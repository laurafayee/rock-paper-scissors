//Global variables
let playerScore = 0;
let computerScore = 0;
let results = document.querySelector('.results');

//Functions 
function computerPlay(){
    let items = Array('Rock', 'Paper', 'Scissors');
    let item = items[Math.floor(Math.random()*items.length)];
    return item;
}
function playRound(playerSelection, computerSelection){
    let result;
    const info = document.createElement('p');
    if(playerSelection === computerSelection){
        info.textContent = `You tie! You both played ${computerSelection.toLowerCase()}`;
        results.appendChild(info);
        return result = 'Tie';
    }else if((playerSelection == 'Rock' && computerSelection == 'Paper') 
            || (playerSelection == 'Paper' && computerSelection == 'Scissors')
            || (playerSelection == 'Scissors' && computerSelection == 'Rock')){
        info.textContent = `You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`;
        results.appendChild(info);
        return result = 'Lose';
    }else{
        info.textContent = `You win! ${playerSelection} beats ${computerSelection.toLowerCase()}`;
        results.appendChild(info);
        return result = 'Win';
    }
}

function score(result){
    if(result=='Lose'){
        computerScore++;
    }else if(result=='Win'){
        playerScore++;
    }
}
function scoreDisplay(){
    const score = document.createElement('p');
    if(computerScore != 1 && playerScore != 1){
        score.textContent = `You have ${playerScore} points and the computer has ${computerScore} points`;
    }else if(computerScore == 1 && playerScore != 1){
        score.textContent = `You have ${playerScore} points and the computer has ${computerScore} point`;
    }else if (computerScore != 1 && playerScore == 1){
        score.textContent = `You have ${playerScore} point and the computer has ${computerScore} points`;
    }else{
        score.textContent = `You have ${playerScore} point and the computer has ${computerScore} point`;
    }
    results.appendChild(score);
}
function winner(){
    const winner = document.createElement('p');
    if(playerScore==5){
        winner.textContent = 'You win the game!';
    }else{
        winner.textContent = 'Computer wins the game!';
    }
    results.appendChild(winner);
}


// When User Clicks Buttons
const rock = document.querySelector('#rock');
rock.addEventListener('click', function(){
    if(computerScore==5 || playerScore ==5){
        return;
    }else{
        let result = playRound('Rock', computerPlay());
        score(result);
        scoreDisplay();
        if(computerScore==5 || playerScore ==5){
            winner();
        }
    }
});
const paper = document.querySelector('#paper');
paper.addEventListener('click', function(){
    if(computerScore==5 || playerScore ==5){
        return;
    }else{
        let result = playRound('Paper', computerPlay());
        score(result);
        scoreDisplay();
        if(computerScore==5 || playerScore ==5){
            winner();
        }
    }
});;
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function(){
    if(computerScore==5 || playerScore ==5){
        return;
    }else{
        let result = playRound('Scissors', computerPlay());
        score(result);
        scoreDisplay();
        if(computerScore==5 || playerScore ==5){
            winner();
        }
    }
});

