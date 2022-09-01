// DOM Elements
const container = document.querySelector(".container");
let blocks = document.querySelectorAll(".blocks");
const restartBtn = document.getElementById("restart");


console.log(blocks);

restartBtn.addEventListener("click", () => {
    blocks.forEach(block => {
        block.textContent = ""
        // block.removeEventListener("click");
    });
    player().choiceContainer.classList.remove("invisible");
    restartBtn.classList.add("invisible");
})

// Player
const player = () => {

    let _playerChoice
    const choiceContainer = document.querySelector("#playerChoice");
    const choices = document.querySelectorAll("#choice");
    choices.forEach(choice => choice.addEventListener("click", () => {
        if (choice.textContent === "X") {
            _playerChoice = "X";
        } else {
            _playerChoice = "O";
        }
        choiceContainer.classList.add("invisible");
        restartBtn.classList.remove("invisible");
        // Add event listeners on blocks
        blocks.forEach(block => block.addEventListener("click", () => {block.textContent = `${_playerChoice}`}));
    }));
    return {_playerChoice, choiceContainer}
}
player()
// Board
const gameBoard = ((board, item) => {
    board = [0,0,0,
             0,0,0,
             0,0,0];
    blocks.forEach(block => block.setAttribute("id", board.indexOf(item)));
})()

// Computer
const computer = (board, computerChoice) => {
    // 0 = empty, 1 = X, 2 = O
   
    let playerChoice = player()._playerChoice;
    playerChoice === "X"? computerChoice = "O":computerChoice = "X";
    for (let i = 0; i < board.length; i++) {
        let randIndex = Math.floor((Math.random) * 8);
        board[randIndex][randIndex] = computerChoice;
    }
}