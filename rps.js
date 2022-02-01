
const computerPlay = () => {
  var rnum = Math.floor(Math.random() * 3)
  if (rnum === 2){
    return "Rock"
  } else if (rnum === 1){
    return "Scissors"
  } else {
    return "Paper"
  };
};

function playRound(playerSelection, computerSelection) {
  pChoice = playerSelection.toLowerCase();
  cChoice = computerSelection.toLowerCase();
  let outcome = ""
  if (pChoice === cChoice){
    outcome = "Tie"
  };
  if (pChoice === "rock"){
    if (cChoice === "scissors"){
      outcome = "Player wins"
    }
    if (cChoice === "paper"){
      outcome = "Computer wins"
    }
  }
  if (pChoice === "scissors"){
    if (cChoice === "paper"){
      outcome = "Player wins"
    }
    if (cChoice === "rock"){
      outcome = "Computer wins"
    }
  }
  if (pChoice === "paper"){
    if (cChoice === "rock"){
      outcome = "Player wins"
    }
    if (cChoice === "scissors"){
      outcome = "Computer wins"
    }
  }
  return (`Player chose ${pChoice}\nComputer chose ${cChoice}\n${outcome}`)
}

const playerSelection = "rock";
const computerSelection = computerPlay();

const game = () => {
  compScore = 0
  playerScore = 0
  for (let i = 0; i < 5; i++){
    let input = prompt(`Score:\nPlayer: ${playerScore}\nComputer: ${compScore}\nChoose rock, paper, or scissors: `)
    while (!(['rock','paper','scissors'].includes(input.toLowerCase()))){
      input = prompt(`Choose a valid option; "rock", "paper", or "scissors": `)
    }
    result = playRound(input,computerPlay())
    alert(result)
    if (result.includes("Player wins")){
      playerScore += 1
    } 
    if (result.includes("Computer wins")){
      compScore += 1
    }
    if (playerScore >= 3){
      alert("Player wins!")
      return
    }
    if (compScore >= 3) {
      alert("You lose!")
      return
    }

  }
  
}

game()
