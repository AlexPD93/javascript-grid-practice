let winningWord = "australia";
const height = 6;
const width = 5;

function initialiseBoard() {
  for (let i = 0; i < height; i++) {
    let row = document.createElement("div");
    row.className = "letter-row";

    for (let j = 0; j < width; j++) {
      let box = document.createElement("div");
      box.id = i.toString() + "-" + j.toString();
      box.classList.add("box");
      box.innerText = "";

      document.getElementById("game-board").appendChild(box);
    }
  }
}

initialiseBoard();
