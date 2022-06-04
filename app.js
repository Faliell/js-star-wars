let playerScore = 0;
let cpuScore = 0;
let playerSelection = "";
let computerSelection = "";

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

  document.querySelector("#phrase").innerHTML = `${singleRound(
    playerSelection,
    computerSelection
  )} `;
  document.querySelector("#rebelImg").src = `./images/${playerSelection}.jpeg`;
  document.querySelector("#playerScore").innerHTML = playerScore;
  document.querySelector("#cpuScore").innerHTML = cpuScore;

  if (playerScore == 3) {
    setTimeout(() => {
      window.location.href = "pages/win.html";
    }, 3000);
  }
  if (cpuScore == 3) {
    setTimeout(() => {
      window.location.href = "pages/lose.html";
    }, 3000);
  }
}

function playerPoint() {
  setTimeout(() => {
    document.querySelector("#empireImg").src = `./images/explosion.gif`;
  }, 1000);
  playerScore++;
}

function cpuPoint() {
  setTimeout(() => {
    document.querySelector("#rebelImg").src = `./images/explosion.gif`;
  }, 1000);
  cpuScore++;
}

function singleRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Draw";
  } else if (playerSelection === "falcon") {
    if (computerSelection === "x-wing") {
      cpuPoint();
      return "You lose, Tie-Fighter beats Falcon";
    } else {
      playerPoint();
      return "You win, Falcon beats Destroyer";
    }
  } else if (playerSelection === "x-wing") {
    if (computerSelection === "falcon") {
      playerPoint();
      return "You win, X-wing beats Death-Star";
    } else {
      cpuPoint();

      return "You lose, Destroyer beats X-wing";
    }
  } else if (playerSelection === "y-wing") {
    if (computerSelection === "x-wing") {
      playerPoint();
      return "You win, Y-wing beats Tie-Fighter";
    } else {
      cpuPoint();
      return "You lose, Death-Star beats Y-wing";
    }
  }
}
