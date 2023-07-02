let choices = ['Rock','Paper','Scissor'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
  return randomNum = choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection){
  console.log("The player chose: "+ playerSelection);
  console.log("The computer chose: " + computerSelection);

  switch(playerSelection){
    case "Rock":
        if(computerSelection === "Scissor"){
            console.log("Player wins! Rock beats Scissor");
            playerScore += 1;
            console.log(playerScore);
        } else if(computerSelection === "Paper"){
            console.log("Computer wins! Rock beats Paper");
            computerScore += 1;
            console.log(computerScore);
        } else{
            console.log("It's a draw.");
        }
        break;
    case "Paper":
        if(computerSelection === "Rock"){
            console.log("Player wins! Paper beats Rock");
            playerScore += 1;
            console.log(playerScore);
        } else if(computerSelection === "Scissor"){
            console.log("Computer wins! Paper beats Scissor");
        }
        else{
            console.log("It's a draw");
        }
        break;
    case "Scissor":
        if(computerSelection === "Paper"){
            console.log("Player wins! Scissor beats Paper.");
            playerScore += 1;
            console.log(playerScore);
        } else if(computerSelection === "Rock"){
            console.log("Computer wins! Rock beats Scissor");
            computerScore += 1;
            console.log(computerScore);
        }
        else{
            console.log("It's a draw.");
        }
  }
}

function game(){
  for(let round = 0; round < 5; round++){
    const playerSelection = prompt("Rock Paper Scissor");
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
  }

  if(playerScore > computerScore){
    console.log("We have a winner! Player got "+ playerScore)
  }
  else if(playerScore < computerScore){
    console.log("We have a winner! Computer got " + computerScore)
  }
  else if(playerScore === computerScore){
    console.log("We have a DRAW!");
  }
  else{
    console.log("WE HAVE AN ERROR. TRY AGAIN");
  }
 
}
game();