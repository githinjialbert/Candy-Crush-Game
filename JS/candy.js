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

const dragStart = () => {
    currentTile = this;
}

const dragOver = (e) => {
    e.preventDefault();
}

const dragEnter = (e) => {
    e.preventDefault();
}

const dragLeave = () => {}

const dragDrop = () => {
    otherTile = this;
}

const dragEnd = () => {
    if (currentTile.src.includes("blank") || otherTile.src.includes("blank")) {
        return;
    }

    //Determining the exact positions of the currentTile and otherTile

    let currCoords = currTile.id.split("-"); // converts it to an array from "0-0" to ["0", "0"]
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-"); 
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    //Checking whether the two tiles are adjacent to each other

    //Horizontal Movements
    let moveLeft = c2 == c-1 && r == r2;
    let moveRight = c2 == c+1 && r == r2;

    //Vertical Movements
    let moveUp = r2 == r-1 && c == c2;
    let moveDown = r2 == r+1 && c == c2;

    let isAdjacent = moveLeft || moveRight || moveDown || moveUp;

    if (isAdjacent) {
        let currentImg = currentTile.src;
        let otherImg = otherTile.src;

        currentTile.src = otherImg;
        otherTile.src = currentImg;

        let validMove = checkValid();

        if (!validMove) {
        let currentImg = currentTile.src;
        let otherImg = otherTile.src;

        currentTile.src = otherImg;
        otherTile.src = currentImg;
        }
    }
}

const crushCandy = () => {
    crushThree();
}

const crushThree = () => {
    
}