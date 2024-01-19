var computerScore = 0;
var playerScore = 0;
  
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
  
function playRound(playerSelection, computerSelection) {
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

function displayScores() {

  const playerScoreSpan = document.getElementById('playerScore');
  const computerScoreSpan = document.getElementById('computerScore');

  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;

  console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
}
  
// Function to update scores and display results
function updateGame(playerChoice) {
    let computerChoice = getComputerChoice();
    let roundResult = playRound(playerChoice.toUpperCase(), computerChoice);

    switch(roundResult) {
        case 1:
            playerScore++;
            console.log('Player Wins!');
            break;
        case 2:
            computerScore++;
            console.log('Computer Wins!');
            break;
        case 0:
            console.log('You Tied!');
            break;
    }

    displayScores(); // Display current scores after each round

    // Check if the game has ended
    if (playerScore >= 3 || computerScore >= 3) {
      var winnerDiv = document.querySelector('#winner');
    
      // Clear previous winner message
      winnerDiv.innerHTML = '';
  
      var content = document.createElement('h3');
      content.classList.add('content');
  
      if(playerScore > computerScore){
        content.textContent = 'Player is the winner!';
      } else {
        content.textContent ='Computer is the winner!';
      }
  
      // Append the new winner message
      winnerDiv.appendChild(content);
    }
}
  // Function to start the game
function playGame() {
    // Get all buttons
    const buttons = document.querySelectorAll('button');

    // Set event listener for each button
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (playerScore < 3 && computerScore < 3) {
                updateGame(this.textContent); 
            }
        });
    });
}

// main

playGame();
  

