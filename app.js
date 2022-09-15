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
    player.choiceContainer.classList.remove("invisible");
    restartBtn.classList.add("invisible");
})

// Player
const player = (() => {

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
        blocks.forEach(block => {
            block.addEventListener("click", () => {block.textContent = `${_playerChoice}`})
            gameBoards.setField(block.getAttribute("id"), _playerChoice);
        });
    }));
    return {_playerChoice, choiceContainer}
})()

// Board
const gameBoards = ((board, item) => {
    board = ["","","",
             "","","",
             "","",""];
    const setField = (index, sign) => {
        board[index] = sign;
    }
    return {setField};
})()

// Computer
const computer = () => {
    let computerChoice;
    let playerChoice = player._playerChoice;

    playerChoice === "X"? computerChoice = "O":computerChoice = "X";
    blocks.forEach(block => {
        let randIndex = Math.floor((Math.random) * 8);
        gameBoards.setField(randIndex, computerChoice);
        block.textContent = computerChoice;
    })

    return {computerChoice};
}