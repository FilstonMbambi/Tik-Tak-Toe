// DOM Elements
const container = document.querySelector(".container");
let blocks = document.querySelectorAll(".blocks");
const restartBtn = document.getElementById("restart");


restartBtn.addEventListener("click", () => {
    blocks.forEach(block => {
        block.textContent = "";
        gameBoards.setField(block.getAttribute("id"), "");
        // block.removeEventListener("click");
    });
    player.choiceContainer.classList.remove("invisible");
    restartBtn.classList.add("invisible");
})

// Player
const player = (() => {

    let _computerChoice;
    let _playerChoice
    const choiceContainer = document.querySelector("#playerChoice");
    const choices = document.querySelectorAll("#choice");
    choices.forEach(choice => choice.addEventListener("click", () => {
        if (choice.textContent === "X") {
            _playerChoice = "X";
            _computerChoice = "O";
        } else {
            _playerChoice = "O";
            _computerChoice = "X";
        }
        choiceContainer.classList.add("invisible");
        restartBtn.classList.remove("invisible");

        // Add event listeners on blocks
        blocks.forEach(block => {
            block.addEventListener("click", () => {
                block.textContent = `${_playerChoice}`;
                gameBoards.setField(block.getAttribute("id"), _playerChoice);

                let randIndex = Math.floor((Math.random()) * 8);
                gameBoards.setField(randIndex, _computerChoice);
                let field = document.getElementById(`${randIndex}`);
                field.textContent = _computerChoice;
                console.log(gameBoards.board);
            });
        });

    }));
    return { _playerChoice, choiceContainer, _computerChoice }
})()

// Board
const gameBoards = (() => {
    let board = ["", "", "",
                 "", "", "",
                 "", "", ""];
    const setField = (index, sign) => {
        if (board[index] = sign) return;
        board[index] = sign;
    }
    return { setField, board };
})()

// Computer
const computer = (block) => {
    
}