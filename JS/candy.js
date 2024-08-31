const candies = ["Blue", "Orange", "Green", "Yellow", "Red", "Purple"];
const board = [];
const rows = 9;
const columns = 9;
let currentTile;
let otherTile;
const myBoard = document.getElementById("board");
const score = document.getElementById("score");

window.onload(() => {
    startGame();

    window.setInterval(() => {
        crushCandy();
        slideCandy();
        generateCandy();
    }, 150);
});

const randomCandy = () => {
    return candies[Math.floor(Math.random() * candies.length)];
}

const startGame = () => {
    for (let r = 0; r < rows; r++) {

        let rows = [];

        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("img");

            tile.id  = r.toString() + "-" + c.toString();
            tile.src = "./images/" + randomCandy() + ".png";

            tile.addEventListener("dragstart", dragStart); // click and initialize the drag process
            tile.addEventListener("dragover", dragOver); // click on candy, moving mouse to drag the candy
            tile.addEventListener("dragenter", dragEnter); // dragging candy onto another candy
            tile.addEventListener("dragleave", dragLeave); // leave candy over the other candy
            tile.addEventListener("drop", dragDrop); // drop candy over other candy
            tile.addEventListener("dragend", dragEnd); // after drag process is completed, we swap candies

            myBoard.append(tile);
            rows.push(tile);
        }
        board.push(row);
    }
    console.log(board);
}