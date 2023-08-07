function playRound(playerSelection, computerSelection) {
    let winner = null;
    if(playerSelection === computerSelection){
      return 0;
    }
    switch(playerSelection){
      case 'ROCK': 
      if(computerSelection ===  'SCISSORS'){
        return 1;
      } else{
        return 2;
      }

      case 'SCISSORS':
        if(computerSelection === "PAPER"){
          return 1;
        } else{
          return 2; 
        }

        case 'PAPER':
          if(computerSelection === 'ROCK'){
            return 1;
          } else{
            return 2; 
          }
    }

  }

  // function to return computers choice
function getComputerChoice(){
    // assign random number bw 1 / 3
    let selection = Math.floor(Math.random() * 3) + 1;
    switch (selection){
      case 1:
        return "PAPER";
      case 2:
        return "ROCK";
      default:
        return "SCISSORS";
    }
}
   


var computerScore = 0;
var playerScore = 0;


while(computerScore < 3 && playerScore < 3){

  // get user input
  let userResponse = prompt('Make your choice: ').toUpperCase();
  let computerResponse = getComputerChoice();

  let round = playRound(userResponse, computerResponse);

  switch(round){
    case 1: playerScore ++;
    console.log('Player Wins!');
    break;


    case 2: computerScore ++;
    console.log('Computer Wins!');
    break;


    case 0:
      console.log('You Tied!');
      break;

  }
}


  if(playerScore > computerScore){
    console.log('Player Wins the game!');
  } else{
    console.log('Computer Wins the game!');
  }
