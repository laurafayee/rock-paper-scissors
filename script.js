function computerPlay(){
    let items = Array('Rock', 'Paper', 'Scissors');
    let item = items[Math.floor(Math.random()*items.length)];
    return item;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    
    if(playerSelection === computerSelection){
        console.log(`You tie! You both played ${computerSelection}`);
    }else if((playerSelection == 'Rock' && computerSelection == 'Paper') 
            || (playerSelection == 'Paper' && computerSelection == 'Scissors')
            || (playerSelection == 'Scissors' && computerSelection == 'Rock')){
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    }else{
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    }
}