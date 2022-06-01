let playerPoint = 0;
let cpuPoint = 0;
let playerSelection = "";
let computerSelection = "";
let game = true;

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    document.querySelector("#empireImg").src = "./images/dark1.jpeg";
    return "falcon";
  }
  if (randomNumber === 1) {
    document.querySelector("#empireImg").src = "./images/dark2.jpeg";
    return "x-wing";
  }
  if (randomNumber === 2) {
    document.querySelector("#empireImg").src = "./images/dark3.jpeg";
    return "y-wing";
  }
}

function choicePlayer(event) {
  playerSelection = event.target.id;
  computerSelection = computerPlay();

  document.querySelector("#center").innerHTML = `${singleRound(
    playerSelection,
    computerSelection
  )} `;
  document.querySelector("#rebelImg").src = `./images/${playerSelection}.jpeg`;
  document.querySelector("#playerScore").innerHTML = playerPoint;
  document.querySelector("#cpuScore").innerHTML = cpuPoint;
  if (playerPoint == 5) {
    console.log("you win");
  }
  if (cpuPoint == 5) {
    console.log("you Lose");
  }
}

function singleRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Draw";
  } else if (playerSelection === "falcon") {
    if (computerSelection === "x-wing") {
      cpuPoint++;
      return "You lose, Tie-Fighter beats Falcon";
    } else {
      playerPoint++;
      return "You win, Falcon beats Destroyer";
    }
  } else if (playerSelection === "x-wing") {
    if (computerSelection === "falcon") {
      playerPoint++;
      return "You win, X-wing beats Death-Star";
    } else {
      cpuPoint++;
      return "You lose, Destroyer beats X-wing";
    }
  } else if (playerSelection === "y-wing") {
    if (computerSelection === "x-wing") {
      playerPoint++;
      return "You win, Y-wing beats Tie-Fighter";
    } else {
      cpuPoint++;
      return "You lose, Death-Star beats Y-wing";
    }
  } else {
    return "Error Typo";
  }
}