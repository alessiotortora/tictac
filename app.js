const div = document.getElementsByClassName("items");
const button = document.querySelector("button");
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const gameResult = document.getElementById('game-result');

let currentPlayer = "X";

for (let i = 0; i < div.length; i++) {
  div[i].addEventListener("click", function (e) {
    
    if (div[i].textContent === "") {
      div[i].textContent = currentPlayer;
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
    checkForWin();
  });
}

button.addEventListener("click", function () {
  for (let i = 0; i < div.length; i++) {
    div[i].textContent = "";
  }
});

function checkForWin() {
  // Check for horizontal win
  for (let i = 0; i < 9; i += 3) {
    if (
      div[i].textContent === "X" &&
      div[i + 1].textContent === "X" &&
      div[i + 2].textContent === "X"
    ) {
      console.log("X wins!");
      showModal("X wins!");
      return true;
    }
    if (
      div[i].textContent === "O" &&
      div[i + 1].textContent === "O" &&
      div[i + 2].textContent === "O"
    ) {
      console.log("O wins!");
      showModal("O wins!");
      return true;
    }
  }

  // Check for vertical win
  for (let i = 0; i < 3; i++) {
    if (
      div[i].textContent === "X" &&
      div[i + 3].textContent === "X" &&
      div[i + 6].textContent === "X"
    ) {
      console.log("X wins!");
      showModal("X wins!");
      return true;
    }
    if (
      div[i].textContent === "O" &&
      div[i + 3].textContent === "O" &&
      div[i + 6].textContent === "O"
    ) {
      console.log("O wins!");
      showModal("O wins!");
      return true;
    }
  }

  // Check for diagonal win
  if (
    div[0].textContent === "X" &&
    div[4].textContent === "X" &&
    div[8].textContent === "X"
  ) {
    console.log("X wins!");
    showModal("X wins!");
    return true;
  }
  if (
    div[0].textContent === "O" &&
    div[4].textContent === "O" &&
    div[8].textContent === "O"
  ) {
    console.log("O wins!");
    showModal("O wins!");
    return true;
  }
  if (
    div[2].textContent === "X" &&
    div[4].textContent === "X" &&
    div[6].textContent === "X"
  ) {
    console.log("X wins!");
    showModal("X wins!");
    return true;
  }
  if (
    div[2].textContent === "O" &&
    div[4].textContent === "O" &&
    div[6].textContent === "O"
  ) {
    console.log("O wins!");
    showModal("O wins!");
    return true;
  }

  // Check for tie
  let emptyDiv = 0;
  for (let i = 0; i < div.length; i++) {
    if (div[i].textContent === "") {
      emptyDiv++;
    }
  }
  if (emptyDiv === 0) {
    console.log("Tie game!");
    showModal("Tie game!");
    return true;
  }

  return false;
}

function showModal(message) {
    gameResult.textContent = message;
    modalOverlay.style.display = "block";
  }
  
  modalClose.addEventListener("click", function() {
    modalOverlay.style.display = "none";
  });